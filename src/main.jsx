import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import PagesToRead from './Component/PagesToRead/PagesToRead.jsx';
import ListedBooks from './Component/ListedBooks/ListedBooks.jsx';
import Root from './Component/Root/Root.jsx';
import BookDetails from './Component/BookDetails/BookDetails.jsx';
import ReadingList from './Component/ReadingList/ReadingList.jsx';
import WishList from './Component/WishList/WishList.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listedbooks",
        element: <ListedBooks> </ListedBooks>,
        loader: () => fetch("data/bookData.json"),
        children: [
          {
            path: "/listedbooks/readinglist",
            element: <ReadingList></ReadingList>,
            loader: () => fetch("data/bookData.json")
          },
          {
            path: "/listedbooks/wishlist",
            element: <WishList></WishList>,
            loader: () => fetch("data/bookData.json")
          },
        ],
      },
      {
        path: '/PagesToRead',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("data/bookData.json")
      },
      {
        path: '/bookDetails/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch("data/bookData.json")
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

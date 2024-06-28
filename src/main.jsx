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
        path: '/ListedBooks',
        element: <ListedBooks> </ListedBooks>
      },
      {
        path: '/PagesToRead',
        element: <PagesToRead></PagesToRead>
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

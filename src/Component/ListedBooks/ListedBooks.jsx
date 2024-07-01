import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, Outlet, useLoaderData } from "react-router-dom";


const ListedBooks = () => {

/*     const [bookId, setBookId] = useState([]);
    const BookDataLoader = useLoaderData();

    useEffect(() => {
        if (BookDataLoader) {
            const ids = BookDataLoader.map(book => book.bookId);
            setBookId(ids);
        }
    }, [BookDataLoader]);
 */


    return (
        <div className="bg-white text-black">
            <div className="container mx-auto">
                <div>
                    <h1 className="font-bold text-3xl py-6 bg-gray-100 rounded-2xl text-center">Books</h1>
                </div>
                <div className="py-10">
                    <details className="dropdown">
                        <summary className="btn m-1 px-7 flex items-center gap-5 bg-[#23BE0A] border-none text-white font-bold hover:bg-[#198a07]">Sort By <FaChevronDown /></summary>
                        <ul className="menu dropdown-content rounded-box z-[1] w-52 p-2 shadow-lg">
                            <li><a>Rating</a></li>
                            <li><a>Published year</a></li>
                            <li><a>Number of pages</a></li>
                        </ul>
                    </details>
                </div>
                <div>
                    <div className="border-b-[2px] flex gap-4">
                        <Link to="/listedbooks/readinglist">
                           Read Books
                        </Link>
                        <Link to="/listedbooks/wishlist">
                           Wish List
                        </Link>
                    </div>
                    <Outlet></Outlet>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
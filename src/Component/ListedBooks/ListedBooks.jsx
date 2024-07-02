import { FaChevronDown } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ListedBooks = () => {
    const location = useLocation();

    const [activeButton, setActiveButton] = useState("");

    useEffect(() => {
        if (location.pathname.includes("readinglist")) {
            setActiveButton("readinglist");
        } else if (location.pathname.includes("wishlist")) {
            setActiveButton("wishlist");
        }
    }, [location.pathname]);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <div className="bg-white text-black">
            <div className="container mx-auto">
                <div>
                    <h1 className="font-bold text-3xl py-6 bg-gray-100 rounded-2xl text-center">Books</h1>
                </div>
                <div className="py-10">
                    <details className="dropdown">
                        <summary className="btn m-1 px-14 flex items-center gap-5 bg-[#23BE0A] border-none text-white font-bold hover:bg-[#198a07]">Sort By <FaChevronDown /></summary>
                        <ul className="menu dropdown-content bg-gray-200 rounded-box z-[1] w-52 p-2 shadow-lg">
                            <li><a>Rating</a></li>
                            <li><a>Published year</a></li>
                            <li><a>Number of pages</a></li>
                        </ul>
                    </details>
                </div>
                <div>
                    <div className="border-b-[2px] flex gap-4">
                        <Link to="/listedbooks/readinglist">
                            <button
                                onClick={() => handleButtonClick("readinglist")}
                                className={`${activeButton === "readinglist" ? "border-b-2 border-black" : ""}`}
                            >
                                Read Books
                            </button>
                        </Link>
                        <Link to="/listedbooks/wishlist">
                            <button
                                onClick={() => handleButtonClick("wishlist")}
                                className={`${activeButton === "wishlist" ? "border-b-2 border-black" : ""}`}
                            >
                                Wish List
                            </button>
                        </Link>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;

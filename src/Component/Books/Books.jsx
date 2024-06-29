import Book from "../Book/Book";
import { useEffect, useState } from "react";


const Books = () => {

    const [books, setBooks] = useState([]);
    const [sliced, setSliced] = useState(6);

    useEffect(() => {
        fetch("/data/bookData.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])




    return (
        <div className="mt-20">
            <div className="text-center">
                <h1 className="playfair font-bold text-5xl pb-10">Books</h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    books.slice(0, sliced).map(bookData => <Book key={bookData.bookId} bookData={bookData}></Book>)
                }
            </div>
            <div className={sliced === books.length && "hidden"}>
                <div className="flex items-center justify-center">
                    <button onClick={() => setSliced(books.length)} className="px-3 py-2 rounded-lg bg-gray-200 border-2 border-green-500 text-green-500 font-semibold my-10">See more</button>
                </div>
            </div>
        </div>
    );
};

export default Books;
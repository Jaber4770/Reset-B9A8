import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { PiNoteLight } from "react-icons/pi";


const WishListBook = ({book}) => {
    return (
        <div className="pb-5">
        <div className="card card-side shadow-xl">
            <figure className="p-5 m-2 bg-gray-200">
                <img className="rounded-lg w-48"
                    src={book.image}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title playfair text-3xl">{book.bookName}</h2>
                <p className="font-semibold">By: {book.author}</p>
                <div className="flex my-2 gap-10">
                    <span><span className="font-semibold me-4">Tag:</span>
                        {book.tags.map(tag => <span className="bg-gray-100 text-green-500 font-semibold rounded-full px-3 py-2 me-4"> #{tag}</span>)}
                    </span>
                    <p className="flex text-gray-600 items-center gap-2"><IoLocationOutline /> Year of Publishing: {book.yearOfPublishing}</p>
                </div>
                <div className="flex text-gray-500 gap-10 my-4">
                    <span className="flex items-center gap-2"><IoPeopleOutline /> Publisher: {book.publisher}</span>
                    <p className="flex items-center gap-2"><PiNoteLight /> Page {book.totalPages}</p>
                </div>
                <hr />
                <div className="flex items-center gap-5 pt-4">
                    <span className="px-3 py-2 bg-blue-200 rounded-full text-blue-700">Category: {book.category}</span>
                    <span className="px-3 py-2 bg-[#ffad3357] rounded-full text-yellow-700">Rating: {book.rating}</span>
                    <button className="px-3 py-2 bg-[#23BE0A] rounded-full text-white">View Details</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default WishListBook;
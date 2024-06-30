import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import { getItemFromReadingLocalStorage, getItemFromWishLocalStorage, setItemToReadingLocalStorage, setItemToWishLocalStorage } from "../Utility/LocalStorage.jsx/LocalStorage";


const BookDetails = () => {

    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdINT = parseInt(bookId);

    const book = books.find(book => book.bookId === bookIdINT);



    const handleLocalStorageReadingList = () => {

        const storedBookToReadingList = getItemFromReadingLocalStorage();
        const exists = storedBookToReadingList.find(bookId => bookId === bookIdINT);
        if (exists) {
            swal("You have already added this book to your Reading list!");
        }
        else {
            setItemToReadingLocalStorage(bookIdINT);
            toast.success("Added to Reading List");
        }
    }

    const handleLocalStorageWishList = () => {
        const storedBookToWishList = getItemFromWishLocalStorage();
        const storedBookToReadingList = getItemFromReadingLocalStorage();
        const readinListIsExists = storedBookToReadingList.find(readingListBookId => readingListBookId === bookIdINT)
        const exists = storedBookToWishList.find(bookID => bookID === bookIdINT);
        if (readinListIsExists) {
            swal("You have added this book to Reading List. That is why you can not add this book to WishList.");
            if (exists) {
                swal("You have already added this book to your Wishlist!");

            }
        }
        else {
            setItemToWishLocalStorage(bookIdINT);
            toast.success("Added to Wish List");
        }
    }





    return (
        <div className="bg-white">
            <div className="container mx-auto">
                <div className="flex gap-10">
                    <div className="bg-gray-100 rounded-3xl p-10 flex justify-center flex-1">
                        <img className="w-2/3" src={book.image} alt="" />
                    </div>
                    <div className="text-black clear-start flex-1">
                        <h1 className="text-5xl playfair pb-5">{book.bookName}</h1>
                        <p className="font-semibold text-[20px] pb-5">By: {book.author}</p>
                        <hr />
                        <p className="text-[18px] font-semibold py-2">{book.category}</p>
                        <hr />
                        <p className="py-2 text-gray-500"><span className="font-bold text-black">Review: </span> {book.review}</p>
                        <p className="py-5"><span className="font-bold pe-2">Tag: </span>
                            {
                                book.tags.map(tag => <span key={tag.bookId} className="ps-2 me-2 text-green-400 bg-gray-100 px-3 py-2 rounded-full font-semibold">#{tag}</span>)
                            }
                        </p>
                        <hr />
                        <div className="w-1/2 mt-5 flex flex-col gap-5">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Number of Pages: </span>
                                <span className="font-bold text-black">{book.totalPages}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Publisher: </span>
                                <span className="font-bold text-black">{book.publisher}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Year of Publishing: </span>
                                <span className="font-bold text-black">{book.yearOfPublishing}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Rating: </span>
                                <span className="font-bold text-black">{book.rating}</span>
                            </div>
                        </div>
                        <div className="mt-10 flex gap-3">
                            <button onClick={handleLocalStorageReadingList} className="border-[2px] px-5 py-3 rounded-lg text-green-500 font-semibold border-green-500">Read</button>
                            <button onClick={handleLocalStorageWishList} className="border-[2px] px-5 py-3 rounded-lg text-white font-semibold border-[#50B1C9] bg-[#50B1C9]">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
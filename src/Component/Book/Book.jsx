import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Book = ({ bookData }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, Security, Exploitation, publisher, yearOfPublishing } = bookData;
    return (
        <>
            <Link to={`/bookDetails/${bookId}`}>
                <div className="border-2 rounded-lg p-5">
                    <div className="bg-gray-100 rounded-lg flex justify-center">
                        <img className="w-52 h-72 p-4" src={image} alt="" />
                    </div>
                    <div className="mt-10">
                        {
                            tags.map((tag, index) => <span className="px-3 py-2 text-green-500 font-semibold bg-gray-200 rounded-full border-2 me-3" key={index}>{tag}</span>)
                        }
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <h1 className="playfair text-2xl font-bold py-5">{bookName}</h1>
                            <p className="font-semibold">By: {author}</p>
                        </div>
                        <div className="flex justify-between mt-4 border-t-2 border-dashed">
                            <p className="font-semibold">{category}</p>
                            <p className="flex items-center gap-2 font-semibold">{rating}<FaRegStar />
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Book;
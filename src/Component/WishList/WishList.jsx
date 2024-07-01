import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItemFromWishLocalStorage } from "../Utility/LocalStorage.jsx/LocalStorage";
import WishListBook from "../WishListBook/WishListBook";


const WishList = () => {
    const [bookId, setBookId] = useState([]);  //Loaded data id
    const [lsBookId, setLsBookId] = useState([]); //local storage id
    const [matchedID, setmatchedID] = useState([]); // matched id
    const [matchedBook, setMatchedBook] = useState([]) //matched book to show the data to UI

    const BookDataLoader = useLoaderData(); // loaded data

    useEffect(() => {
        if (BookDataLoader) {
            const ids = BookDataLoader.map(book => book.bookId);
            setBookId(ids);
        }
    }, [BookDataLoader]);

    useEffect(() => {
        const getWishListFromLs = getItemFromWishLocalStorage();
        setLsBookId(getWishListFromLs);

    }, [])


    useEffect(() => {
        if (lsBookId.length > 0 && bookId.length > 0) {
            const matched = bookId.filter(id => lsBookId.includes(id));
            setmatchedID(matched);
            const matchedObject = matched.map(id => BookDataLoader.find(book => book.bookId === id));
            setMatchedBook(matchedObject);
        }
    }, [lsBookId, bookId]);

    console.log(matchedID);


    return (
        <div>
            <div className="pt-16">
                {
                    matchedBook.map(book => <WishListBook book={book} key={book.bookId}></WishListBook>)
                }
            </div>
        </div>
    );
};

export default WishList;
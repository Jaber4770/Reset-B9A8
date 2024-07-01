import { useLoaderData } from "react-router-dom";
import { getItemFromReadingLocalStorage } from "../Utility/LocalStorage.jsx/LocalStorage";
import { useEffect, useState } from "react";
import ReadingListBook from "../ReadingListBook/ReadingListBook";


const ReadingList = () => {

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
        const getReadingListFromLs = getItemFromReadingLocalStorage();
        setLsBookId(getReadingListFromLs);

    }, [])


    useEffect(() => {
        if (lsBookId.length > 0 && bookId.length > 0) {
            const matched = bookId.filter(id => lsBookId.includes(id));
            setmatchedID(matched);
            const matchedObject = matched.map(id => BookDataLoader.find(book => book.bookId === id));
            setMatchedBook(matchedObject);
        }
    }, [lsBookId, bookId]);

    return (
        <div>
            <div className="pt-16">
                {
                    matchedBook.map(book => <ReadingListBook book={book} key={book.bookId}></ReadingListBook>)
                }
            </div>
        </div>
    );
};

export default ReadingList;


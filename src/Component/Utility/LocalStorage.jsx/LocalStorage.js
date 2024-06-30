// Reading List
const getItemFromReadingLocalStorage = () => {
    const getFromLs = localStorage.getItem("readingList");
    if (getFromLs) {
        return JSON.parse(getFromLs);
    }
    return [];

}
const setItemToReadingLocalStorage = bookIdINT => {
    const storedBookToReadingList = getItemFromReadingLocalStorage();
    const exists = storedBookToReadingList.find(bookID => bookID.bookId === bookIdINT);
    if (!exists) {
        storedBookToReadingList.push(bookIdINT);
        localStorage.setItem("readingList", JSON.stringify(storedBookToReadingList));
    }
}
// ---------------------WishList--------------------------------
const getItemFromWishLocalStorage = () => {
    const getFromLs = localStorage.getItem("wishList");
    if (getFromLs) {
        return JSON.parse(getFromLs);
    }
    return [];

}
const setItemToWishLocalStorage = bookIdINT => {
    const storedBookToWishList = getItemFromWishLocalStorage();
    const exists = storedBookToWishList.find(bookID => bookID.bookId === bookIdINT);
    if (!exists) {
        storedBookToWishList.push(bookIdINT);
        localStorage.setItem("wishList", JSON.stringify(storedBookToWishList));
    }
}






export { setItemToWishLocalStorage, setItemToReadingLocalStorage }
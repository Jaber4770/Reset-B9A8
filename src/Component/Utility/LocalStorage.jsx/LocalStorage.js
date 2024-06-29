const getItemFromLocalStorage = () => {
    const getFromLs = localStorage.getItem("readingList");
    if (getFromLs) {
        return JSON.parse(getFromLs);
    }
    return [];

}
const setItemTLocalStorage = id => {
    const storedBookToReadingList = getItemFromLocalStorage();
    const exists = storedBookToReadingList.find(bookID => bookID.bookId === id);
    if (!exists) {
        storedBookToReadingList.push(id);
        localStorage.setItem("readingList", JSON.stringify(storedBookToReadingList));
    }
}

export { getItemFromLocalStorage, setItemTLocalStorage }
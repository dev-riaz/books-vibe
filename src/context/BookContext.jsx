import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const bookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [storBook, setStorBook] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleRead = (currentBook) => {
    //step 1:store book id or book object
    //step 2:where to store
    //step 3:array or collection
    //step 4: if the book is already exist show a alert or toast
    //step 5:if not then add the book in the array of collection
    console.log(currentBook);
    const isExistBook = storBook.find(
      (book) => book.bookId == currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      setStorBook([...storBook, currentBook]);
      toast.success(`${currentBook.bookName} book added to read list`);
    }
  };
  const handleWishlist = (currentBook) => {
    //step 1:store book id or book object
    //step 2:where to store
    //step 3:array or collection
    //step 4: if the book is already exist show a alert or toast
    //step 5:if not then add the book in the array of collection
    console.log(currentBook);
    const isExistBook = wishlist.find(
      (book) => book.bookId == currentBook.bookId,
    );

    const isExistInReadList = storBook.find(
      (book) => book.bookId == currentBook.bookId,
    );

    if (isExistInReadList) {
      toast.error("This book is already in Read list");
      return;
    }

    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      setWishlist([...wishlist, currentBook]);
      toast.success(`${currentBook.bookName} book added to  wish list`);
    
    }
  };

  const data = {
    storBook,
    setStorBook,
    handleRead,
    wishlist,
    setWishlist,
    handleWishlist
  };

  return <bookContext.Provider value={data}>{children}</bookContext.Provider>;
};

export default BookContextProvider;

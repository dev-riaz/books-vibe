import React, { useContext } from "react";
import { bookContext } from "../../context/BookContext";
import ListCard from "./ListCard";

const ReadList = () => {
  const { storBook} = useContext(bookContext);
//   console.log(storBook, wishlist);

if(storBook.length===0){
   return(
     <div className="bg-base-300 h-72 flex justify-center items-center text-2xl text-gray-400 font-bold">
        <h1>No Read List Data Found</h1>
     </div>
   )
}

  return (
    <>
      {storBook.map((book, index) => (
        <ListCard key={index} book={book}></ListCard>
      ))}
    </>
  );
};

export default ReadList;

import React, { useContext } from 'react';
import { bookContext } from '../../context/BookContext';
import ListCard from './ListCard';

const WishList = () => {
  const {wishlist } = useContext(bookContext);
//   console.log(storBook, wishlist);

if(wishlist.length===0){
   return(
     <div className="bg-base-300 h-72 flex justify-center items-center text-2xl text-gray-400 font-bold">
        <h1>No Read List Data Found</h1>
     </div>
   )
}


  return (
    <>
      {wishlist.map((book, index) => (
        <ListCard key={index} book={book}></ListCard>
      ))}
    </>
  );
};

export default WishList;
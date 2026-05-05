import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId } = useParams();

  const books = useLoaderData();

  const expectedBook = books.find((book) => book.bookId == bookId);

  const [storBook, setStorBook] = useState([]);
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
      alert("the book is already exist");
    } else {
      setStorBook([...storBook, currentBook]);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-12 my-4 ">
        <figure className="flex justify-center items-center bg-base-300 py-12 rounded-3xl">
          <img className="h-full" src={expectedBook.image} alt="" />
        </figure>
        <div className="space-y-3">
          <div className="space-y-3">
            <h2 className="text-4xl">{expectedBook.bookName}</h2>
            <p className="text-gray-500">By : {expectedBook.author}</p>
            <hr className="border-dotted" />
            <p className="text-gray-500">{expectedBook.category}</p>
            <hr className="border-dotted" />
          </div>
          <p className="line-clamp-6 text-gray-500">
            <span className="font-bold text-black">Review : </span>
            {expectedBook.review}
          </p>
          <div className="flex gap-3">
            <span className="font-bold">Tag</span>
            {expectedBook.tags.map((tag) => (
              <div className="badge badge-md bg-[#22be0a1f] text-[#23BE0A]">
                {tag}
              </div>
            ))}
          </div>
          <hr className="border-dotted" />
          <div>
            <p className="flex gap-8">
              <span className="text-gray-500">Number of Pages :</span>{" "}
              <span className="font-bold">{expectedBook.totalPages}</span>
            </p>
            <p className="flex gap-21">
              <span className="text-gray-500">Publisher :</span>{" "}
              <span className="font-bold">{expectedBook.publisher}</span>
            </p>
            <p className="flex gap-7">
              <span className="text-gray-500">Year of Publishing :</span>{" "}
              <span className="font-bold">{expectedBook.yearOfPublishing}</span>
            </p>
            <p className="flex gap-27">
              <span className="text-gray-500">Rating :</span>{" "}
              <span className="font-bold">{expectedBook.rating}</span>
            </p>
          </div>
          <div className="space-x-4 font-bold">
            <button
              onClick={() => handleRead(expectedBook)}
              className="btn btn-outline border-2 border-gray-500/40"
            >
              Mark as Read
            </button>
            <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;

import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Card = ({ book }) => {
  console.log(book);

  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card bg-base-100 shadow-sm border border-gray-500/30 p-4"
    >
      <figure className="bg-base-300 py-8 rounded-3xl">
        <img className="h-50" src={book.image} alt="book image" />
      </figure>
      <div className="flex gap-3 mt-4">
        {book.tags.map((tag) => (
          <div className="badge badge-md bg-[#22be0a1f] text-[#23BE0A]">
            {tag}
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-3">
        <h2 className="card-title text-3xl line-clamp-1">{book.bookName}</h2>
        <p className="text-gray-500 font-bold">By : {book.author}</p>
      </div>
      <hr className="border-dashed text-gray-400 my-4" />
      <div className="flex justify-between items-center font-bold text-gray-500">
        <p>Fiction</p>
        <p className="flex justify-between items-center gap-2">
          5.00 <FaRegStar></FaRegStar>{" "}
        </p>
      </div>
    </Link>
  );
};

export default Card;

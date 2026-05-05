import React from "react";

const ListCard = ({ book }) => {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-sm my-4 border border-gray-500/25 p-4 space-x-8">
        <figure className="bg-base-300 p-4 rounded-3xl">
          <img className="h-50 w-40" src={book.image} alt="" />
        </figure>
        <div className="space-y-4">
          <h2 className="card-title text-3xl">{book.bookName}</h2>
          <p className="text-gray-500">By : {book.author}</p>
          <div className="flex gap-3">
            <span className="font-bold">Tag</span>
            {book.tags.map((tag) => (
              <div className="badge badge-md bg-[#22be0a1f] text-[#23BE0A]">
                {tag}
              </div>
            ))}
            <p className="text-gray-500">Year of Publishing: {book.yearOfPublishing}</p>
          </div>
          <div className="flex gap-4 text-gray-500">
            <p>Publisher: {book.publisher}</p>
            <p>Page :{book.totalPages}</p>
          </div>
          <hr className="border-dashed text-gray-400 my-4 w-full" />
          <div className="flex gap-4">
            <div className="badge badge-lg text-[#328EFF] bg-[#328eff27]">
              Category: {book.category}
            </div>
            <div className="badge badge-lg bg-[#ffad333f] text-[#FFAC33]">
              Rating: {book.rating}
            </div>
            <div className="badge badge-lg bg-green-500 text-white">
              View Details
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCard;

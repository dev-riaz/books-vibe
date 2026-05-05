import React, { use } from "react";
import Card from "./Card";

const booksDataPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const Books = use(booksDataPromise);
  // console.log(Books);

  return (
    <div>
      <div className="text-center text-4xl mb-4">
        <h1>Books</h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {Books.map((book) => (
          <Card key={book.bookId} book={book}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;

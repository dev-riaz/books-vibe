import React, { use } from 'react';

const booksDataPromise=fetch("/booksData.json").then(res=>res.json())

const AllBooks = () => {
const allBooks=use(booksDataPromise)
console.log(allBooks);


    return (
        <div>
            
        </div>
    );
};

export default AllBooks;
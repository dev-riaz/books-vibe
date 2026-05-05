import { createBrowserRouter } from "react-router";
import Books from "../components/books/Books";
import Homepage from "../components/homepage/Homepage";
import Mainlayout from "../layout/Mainlayout";
import Error from "../error/Error";
import BookDetails from "../components/homepage/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/books",
        element: <Books></Books>,
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <Error></Error>,
  },
]);

import { createBrowserRouter } from "react-router";
import Books from "../components/books/Books";
import Homepage from "../components/homepage/Homepage";
import Mainlayout from "../layout/Mainlayout";
import Error from "../error/Error";

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
    ],
    errorElement:<Error></Error>
  },
]);
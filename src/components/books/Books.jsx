import React, { useContext } from "react";
import { bookContext } from "../../context/BookContext";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../listedBooks/ReadList";
import WishList from "../listedBooks/WishList";

const Books = () => {
  const { storBook, wishlist } = useContext(bookContext);
  console.log(storBook, wishlist);

  return (
    <>
      <div className="text-center text-3xl my-5 font-bold">
        <h1>Books</h1>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadList></ReadList>
        </TabPanel>
        <TabPanel>
          <WishList></WishList>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Books;

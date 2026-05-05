import React from "react";
import image from "../../assets/banner 1.png";
const Banner = () => {
  return (
    <div className="my-6">
      <div className="bg-base-200 md:p-10 py-5 rounded-3xl">
        <div className="md:flex justify-center items-center flex-row-reverse md:text-start text-center">
          <img src={image} alt="" />
          <div className="space-y-10">
            <h1 className="text-6xl">
              Books to freshen up your bookshelf
            </h1>
            <button className="btn bg-green-500 text-white">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

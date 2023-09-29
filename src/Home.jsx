import React from "react";

const Home = () => {
  return (
    <div className="text-black max-w-[1240px] mx-auto">
      <div className=" mx-4">
        <div className="ml-10 text-gray-500 ">
          <ul className="flex text-[10px] sm:text-xl">
            <li className="px-2">Home /</li>
            <li className="px-2 text-blue-700">Blog /</li>
            <li className="px-2">Caremels tootsie roll croissant chocolate</li>
          </ul>
        </div>
        <div className="flex flex-col items-center my-8 text-gray-600">
          <h1 className="text-2xl md:text-4xl">HELLO! WELCOME TO BLOG</h1>
          <small className="py-2">
            Pastry gummi bears gummies marzipan danish jelly beans chupa chups
            marshmallow
          </small>
        </div>
      </div>
    </div>
  );
};
export default Home;

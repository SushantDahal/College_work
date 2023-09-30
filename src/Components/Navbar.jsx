import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  function HandleNav() {
    setNav(!nav);
  }
  return (
    <div className="text-black cursor-pointer my-5  max-w-[1240px] min-w-[360px] mx-auto uppercase  ">
      <div
        className="mx-4 bg-white h-20 rounded-md flex justify-between items-center   "
        id="Navbar"
      >
        <h1 className="text-2xl  mx-4 capitalize">piKsel</h1>
        <ul className=" hidden md:flex ">
          <li className="py-7 px-8 mx-2  ">Home</li>
          <li className="py-7 px-8 mx-2">Features</li>
          <li className="py-7 px-8 text-blue-400 border-[blue] border-t-[3px] mx-2">
            Blog
          </li>
          <li className="py-7 px-8 mx-2">Portfolio</li>
          <li className="py-7 px-8 mx-2">Contact</li>
        </ul>
        <div onClick={HandleNav} className="block md:hidden mr-8  ">
          {nav ? <AiOutlineClose size={"30"} /> : <AiOutlineMenu size={"30"} />}
        </div>
      </div>
      <div
        className={
          nav
            ? "absolute h-full w-[50%]  ml-4 ease-in duration-200 md:hidden mt-1 bg-black text-white  "
            : "top-[100%] fixed"
        }
      >
        <ul className="uppecase py-4  ">
          <li className="py-7 text-2xl px-8 mx-2  ">Home</li>
          <li className="py-7 text-2xl px-8 mx-2">Features</li>
          <li className="py-7 text-2xl px-8 mx-2">Blog</li>
          <li className="py-7 text-2xl px-8 mx-2">Portfolio</li>
          <li className="py-7 text-2xl px-8 mx-2">Contact</li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;

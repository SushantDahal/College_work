import React from "react";
import {
  AiOutlineCamera,
  AiOutlineProfile,
  AiOutlineCalendar,
  AiOutlineMessage,
  AiOutlineCodepen,
  AiOutlineSearch,
} from "react-icons/ai";

function Content() {
  return (
    <div className="text-gray-600 pt-10 max-w-[1240px] mx-auto">
      <div className="mx-4">
        <div className="grid md:grid-cols-4 mx-2 gap-2">
          {/* Col span 1 */}
          <div className="p-2 col-span-1 h-full flex flex-col items-center">
            <p>
              <AiOutlineCamera className="bg-blue-600 w-[60px] h-[60px] p-5 text-[white]  rounded-md" />
            </p>
            <ul className="text-[12px]">
              <li className="flex py-2 pt-4">
                <AiOutlineProfile size={18} className="mx-2" />
                by Admin
              </li>
              <li className="flex py-2">
                <AiOutlineCalendar size={18} className="mx-2" />
                05-04-2013
              </li>
              <li className="flex py-2">
                <AiOutlineMessage size={18} className="mx-2" />
                75 Comments
              </li>
              <li className="flex py-2">
                <AiOutlineCodepen size={18} className="mx-2" />
                Candy.jelly
              </li>
            </ul>
          </div>
          {/* Col span 2 */}
          <div className="p-2 col-span-2  h-full">
            <div className="bg-white p-2 rounded-md ">
              <div className="w-full mx-auto bg-gray-400 rounded-md  border-white h-[200px]"></div>
            </div>
            <h1 className="text-blue-600 font-bold my-4">
              Caremels tootsie roll croissant chocolate
            </h1>
          </div>
          {/* Col span 1 */}
          <div className="p-2 col-span-1  h-full" id="search">
            <div className="flex items-center justify-center ">
              <input type="text" className="max-w-[190px] py-1" />
              <AiOutlineSearch
                size={32}
                className="bg-blue-700 my-2 rounded-r-[4px] text-red-800 min-w-[30px] py-1"
              />
            </div>
            <div className="ml-6 py-6 text-[14px]" id="Blog">
              <h1 className="text-[18px] font-semibold text-gray-700">
                Blog Categories
              </h1>
              <ul>
                <li className="flex items-center pt-5 py-1">
                  <input type="radio" className="w-[10px]" />
                  <label className="px-2">Web development</label>
                </li>
                <li className="flex items-center py-1">
                  <input type="radio" className="w-[10px]" />
                  <label className="px-2">E-Commerce</label>
                </li>
                <li className="flex items-center py-1">
                  <input type="radio" className="w-[10px]" />
                  <label className="px-2">Brand Identity</label>
                </li>
                <li className="flex items-center py-1">
                  <input type="radio" className="w-[10px]" />
                  <label className="px-2">Web Design</label>
                </li>
                <li className="flex items-center py-1">
                  <input type="radio" className="w-[10px]" />
                  <label className="px-2">Mobile/Apps Development</label>
                </li>
                <li className="flex items-center py-1">
                  <input type="radio" className="w-[10px]" />
                  <label className="px-2">Web Marketing</label>
                </li>
                <li className="flex items-center py-1">
                  <input type="radio" className="w-[10px]" />
                  <label className="px-2">Flash/Flex Development</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;

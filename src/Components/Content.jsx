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
        <div className="grid md:grid-cols-4 mx-2 md:mx-2 gap-2 ">
          {/* Col span 1 */}
          <div className="p-2 col-span-1 h-full flex flex-col items-center ml-10 md:m-0   ">
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
            <h1 className="text-blue-600 my-4">
              Caremels tootsie roll croissant chocolate
            </h1>
            <div>
              <p className="py-2">
                Bear claw danish bear claw soufflé marshmallow bonbon candy
                marzipan candy. Lemon drops applicake lollipop sweet roll
                gummies dragée. Cupcake donut caramels chocolate cake choclate
                bar applicake. Chupa chups biscuit croissant.
              </p>
              <p className="py-2">
                Danish jelly beans carrot cake gummi bears carrot cake. Tiramisu
                cookie wafer jelly bean cmels tart. Tart sugar plum sweet. Wafer
                pastry ice cream. Sweet caramels sweet roll powder s Freake
                croissant muffin. Faworki liquorice ice cream lemon drops
                danish. Gummies chupa chupcookie. Gummi bears cookie icing apple
                pie gummi bears chupa chups. Wafer sesame snaps chocolate bar
                gummi bears.
              </p>
              <p>
                Cake carrot cake jujubes. Apple pie jelly beans gummi bears.
                Tiramisu wypas marzipan oat cake carrot cake tart donut. Jelly-o
                candy canes biscuit bear claw icing caramels cookie chupa chups,
                Bonbon candy dessert.
              </p>
            </div>
            <div className="my-6">
              <h1 className="text-xl py-5 font-bold">Heading 1</h1>
              <p>
                Danish lemon drops jelly-o jujubes marshmallow. Powder oar cake
                lemon drops. Cotton candy chupa chups biscuit cake. Candy toffee
                tart gingerbread bonbon sweet roll chocolate. Choclate croissant
                caramels zart applicake liquorice fruitcake tart halvah.
              </p>
              <h1 className="text-xl py-5 font-bold">Heading 2</h1>
              <p>
                Danish lemen drops jelly o jujubes marshmallow. Powder ost cake
                lemon drops. Cotton candy chupe chups biscur cake. Candy coffee
                cart gingerbread bonbon sweet mil chocolate, Choclare crossant
                carame s tart applicake liquorice fruitcake cart halvah.
              </p>
            </div>
          </div>
          {/* Col span 1 */}
          <div className="p-2 col-span-1  h-full" id="search">
            <div className="flex items-center justify-center ">
              <input type="text" className="max-w-[190px] py-1" />
              <AiOutlineSearch
                size={32}
                className="bg-blue-500 my-2 rounded-r-[4px] text-white min-w-[30px] py-1"
              />
            </div>
            <div className="ml-6 py-6 text-[14px]" id="Blog">
              <h1 className="text-[18px] font-semibold text-gray-700 text-center md:text-start">
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
            <div className="ml-6">
              <h1 className="font-bold pt-8 pb-4 text-center md:text-start">
                Flickr Feed
              </h1>
              <div className="grid grid-cols-3 gap-2 mx-2">
                <div className="bg-white rounded-md p-[6px]">
                  <div className="bg-gray-500 h-12 rounded-md"> </div>
                </div>
                <div className="bg-white rounded-md p-[6px]">
                  <div className="bg-gray-500 h-12 rounded-md"> </div>
                </div>
                <div className="bg-white rounded-md p-[6px]">
                  <div className="bg-gray-500 h-12 rounded-md"> </div>
                </div>
                <div className="bg-white rounded-md p-[6px]">
                  <div className="bg-gray-500 h-12 rounded-md"> </div>
                </div>
                <div className="bg-white rounded-md p-[6px]">
                  <div className="bg-gray-500 h-12 rounded-md"> </div>
                </div>
                <div className="bg-white rounded-md p-[6px]">
                  <div className="bg-gray-500 h-12 rounded-md"> </div>
                </div>
              </div>
            </div>
            <div className="ml-6">
              <h1 className="text-center md:text-start py-10 font-bold">
                Popular Tags
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;

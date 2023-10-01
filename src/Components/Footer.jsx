import React from "react";
import {
  AiOutlineInbox,
  AiOutlineFacebook,
  AiOutlineGooglePlus,
  AiOutlineTwitter,
  AiOutlineDribbble,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function Footer() {
  return (
    <div className=" b pb-20 pt-10">
      <div className=" max-w-[1240px] mx-auto">
        <div className="grid md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="px-2">
              <h1 className="text-[16px] font-mono">TEXT WIDGET</h1>
              <p className=" py-2 text-[15px]">
                Brownie candy ice cream. Jelly chupa chups chupa chups toocake.
                Desert apple pie lemon drops.
              </p>
              <p className="py-2 text-[15px]">
                Candy canes tiramisu wypa gummies jujubes macaroon Sweet roll
                biscuiti apple pie sweet
              </p>
            </div>
            <div className="px-2">
              <h1 className="text-[16px] font-mono">SUBSCRIBE US</h1>
              <p className=" py-2 text-[15px]">
                Jelly beans tootise roll oat cake dingo pie wafer sweet roll.
                Sweet gerbread halvah.
              </p>
              <div className="flex bg-blue-500 my-4 items-center rounded-md">
                <input type="text" className="py-3  w-[90%] rounded-l-md" />
                <AiOutlineInbox size={30} className="mx-3" />
              </div>
              <p></p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="px-2">
              <h1 className="text-[16px] font-mono">LATEST TWEETS</h1>
              <p className="py-2 text-[15px]">
                @ Brownie candy ice cream. Jelly chupa chups chupa chups
                toocake.
              </p>
              <small>7 hours ago</small>
              <hr className=" bg-gray-700 my-2" />
              <p className=" py-2 text-[15px]">
                @ Brownie candy ice cream. Jelly chupa chups chupa chups
                toocake.
              </p>
              <small>7 hours ago</small>
            </div>
            <div className="px-2">
              <h1 className="text-[16px] font-mono">GET IN TOUCH </h1>
              <p className=" py-2 text-[15px]">
                Jelly beans tootise roll oat cake dingo pie wafer sweet roll.
                Sweet gerbread halvah.
              </p>
              <div
                className="grid lg:grid-cols-5 md:grid-cols-3  sm:grid-cols-4 grid-cols-3 my-4 gap-3 mx-2 "
                id="footer "
              >
                <div>
                  <AiOutlineFacebook className="rounded-[100%] bg-gray-300 w-10 h-10" />
                </div>
                <div>
                  <AiOutlineDribbble className="rounded-[100%] bg-gray-300 w-10 h-10 text-blue-500" />
                </div>
                <div>
                  <AiOutlineWhatsApp className="rounded-[100%] bg-gray-300 w-10 h-10" />
                </div>

                <div>
                  <AiOutlineGooglePlus className="rounded-[100%] bg-gray-300 w-10 h-10" />
                </div>
                <div>
                  <AiOutlineTwitter className="rounded-[100%] bg-gray-300 w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

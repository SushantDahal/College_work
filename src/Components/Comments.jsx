import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function Comments() {
  return (
    <div className=" max-w-[1240px] mx-auto pb-20">
      <div className="max-w-[900px] ml-[50px] ">
        <div className="text-gray col-span-2  mx-4 p-2  ">
          <h1 className="pb-6 mt-4 text-[17px] font-bold text-gray-500">
            Comments (57)
          </h1>
          <div className="flex ">
            <div className="bg-white p-[5px] rounded-md max-h-[66px]">
              <div className="bg-gray-500 h-14 w-16 rounded-md"></div>
            </div>

            <div className="mx-6 ">
              <h1 className="pb-4  text-gray-600 ">Nick Mcpaul</h1>
              <p className=" text-gray-400">
                Chocolate cake gingerbread dessert sweet roll biscuit chocolate
                tart. Chupa chups marzipan choco- Cake chee late cake jujubes
                lollipop. Powder halvah jujubes cheesecake gummies candy canes
                faworki. Pudding sesame sr macaroon gummi bears souffle icing
                cheesecake.
              </p>
              <div className="flex justify-between py-4  text-gray-700">
                <small>7 minutes ago</small>
                <p className="flex items-center mx-4  ">
                  Reply <AiOutlineArrowUp className="ml-4" />
                </p>
              </div>
            </div>
          </div>
          <hr className="h-[2px] bg-gray-400  w-[90%] mx-auto" />
          {/* Second Comment */}

          <div className="flex justify-end">
            <div className="flex my-4 max-w-[700px]">
              <div className="bg-white p-[5px] rounded-md max-h-[66px]">
                <div className="bg-gray-500 h-14 w-16 rounded-md"></div>
              </div>

              <div className="mx-6 ">
                <h1 className="pb-4  text-gray-600 ">Nick Mcpaul</h1>
                <p className=" text-gray-400">
                  Chocolate cake gingerbread dessert sweet roll biscuit
                  chocolate tart. Chupa chups marzipan choco- Cake chee late
                  cake jujubes lollipop. Powder halvah jujubes cheesecake
                  gummies candy canes faworki. Pudding sesame sr macaroon gummi
                  bears souffle icing cheesecake.
                </p>
                <div className="flex justify-between py-4  text-gray-700">
                  <small>7 minutes ago</small>
                  <p className="flex items-center mx-4  ">
                    Reply <AiOutlineArrowUp className="ml-4" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Third Comment */}
          <hr className="h-[2px] bg-gray-400  w-[90%] mx-auto" />

          <div className="flex my-4 ">
            <div className="bg-white p-[5px] rounded-md max-h-[66px]">
              <div className="bg-gray-500 h-14 w-16 rounded-md"></div>
            </div>

            <div className="mx-6 ">
              <h1 className="pb-4  text-gray-600 ">Nick Mcpaul</h1>
              <p className=" text-gray-400">
                Chocolate cake gingerbread dessert sweet roll biscuit chocolate
                tart. Chupa chups marzipan choco- Cake chee late cake jujubes
                lollipop. Powder halvah jujubes cheesecake gummies candy canes
                faworki. Pudding sesame sr macaroon gummi bears souffle icing
                cheesecake.
              </p>
              <div className="flex justify-between py-4  text-gray-700">
                <small>7 minutes ago</small>
                <p className="flex items-center mx-4  ">
                  Reply <AiOutlineArrowUp className="ml-4" />
                </p>
              </div>
            </div>
          </div>
          <hr className="h-[2px] bg-gray-400  w-[90%] mx-auto" />
        </div>
        {/* Leave a Comment */}
        <div className=" mx-6 p-2">
          <h1 className="text-[16px] text-gray-500 py-4">Leave a Comment</h1>
          <div className="grid md:grid-cols-2 gap-6 ">
            <div className="   col-span-1 ">
              <div className="my-4">
                <input
                  type="text"
                  placeholder="Name *"
                  className=" md:w-[100%] w-[70%]  py-3 px-4 rounded-sm mx-2  outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-Mail *"
                  className=" md:w-[100%] w-[70%] py-3 px-4 rounded-sm mx-2  outline-none"
                />
              </div>
              <div className="my-4">
                <input
                  type="text"
                  placeholder="yoursite.com"
                  className=" md:w-[100%] w-[70%] py-3 px-4 rounded-sm mx-2 outline-none"
                />
              </div>
              <small className="mx-2 text-gray-500 text-[15px]">
                Field marked with * are mandatory !
              </small>
            </div>
            <div>
              <textarea
                name=""
                id=""
                rows="7"
                className="rounded-md w-[280px] md:w-[350px] mx-2"
              ></textarea>
              <div className="text-end mr-6">
                <button className="bg-blue-500 px-4 py-1 text-center my-4 mr-4 md:mr-0 text-white rounded-md  w-[120px] ">
                  Send it
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comments;

import { ICardData } from "@/interface";
import { itemsData } from "@/mock/ItemsMockData";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  let [showPopup, setShowPopup] = useState<boolean>(false);

  const homeCards: ICardData[] = itemsData;
  const renderHomeCards = homeCards.map((item: ICardData, index: number) => {
    return (
      <React.Fragment key={`${item.id}${index}`}>
        <div className="bg-secondary rounded-2xl flex flex-col items-start sm:p-3 border border-gray-600 shadow-xl w-[28rem] gap-3">
          <div className="flex items-center gap-5">
            <img src={item.cardImg} alt="" className="w-14 h-14 rounded-full" />
            <h2 className="text-xl text-white pb-1">{item.cardTitle}</h2>
          </div>
          <p className="text-gray-400">{item.cardDesc}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="p-5 flex gap-5">
        <div className="flex flex-wrap gap-5">{renderHomeCards}</div>
        <div className="flex justify-end w-full absolute bottom-5 right-5">
          <button
            onClick={() => setShowPopup(true)}
            className="p-3 bg-[#334155] rounded-lg text-white w-40"
          >
            Add Item
          </button>
        </div>
        {showPopup === true && (
          <>
            <div className="h-screen w-full bg-black opacity-70 absolute md:block hidden"></div>
            <div className="w-full h-full absolute flex justify-center items-center">
              <div className="bg-secondary rounded-2xl flex flex-col sm:items-center sm:p-5 p-4 border border-gray-600 shadow-xl z-50 absolute md:h-[28rem] h-full sm:w-96 w-full">
                <div className="pb-3">
                  <p className="pb-1 text-gray-200">Title:</p>
                  <input
                    type="text"
                    className="sm:w-80 w-full h-8 bg-transparent border rounded-md focus:outline-none focus:ring-0 border-gray-300 focus:border-[#334155] placeholder-gray-500 text-sm caret-white text-white"
                  />
                </div>
                <div className="pb-3">
                  <p className="pb-1 text-gray-200">Upload Image:</p>
                  <input
                    className="cursor-pointer border rounded-md border-gray-300 focus:border-[#334155] custom-file-input sm:w-80 w-full text-sm text-gray-200"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                  />
                </div>
                <div className="pb-5">
                  <p className="pb-1 text-gray-200">Description:</p>
                  <textarea
                    name="text"
                    id=""
                    className="sm:w-80 w-full rounded-md sm:h-40 h-32 resize-none focus:outline-none focus:ring-0 bg-transparent border-gray-300 focus:border-[#334155] caret-white text-gray-200"
                    cols={30}
                  ></textarea>
                </div>
                <div className="flex justify-between w-full absolute bottom-5 sm:px-7 px-4 sm:-ml-0 -ml-4">
                  <button
                    onClick={() => setShowPopup(false)}
                    className="p-3 rounded-lg text-gray-200 sm:w-32 w-28 border border-gray-300"
                  >
                    Cancel
                  </button>
                  <Link to="#">
                    <button className="p-3 bg-[#334155] rounded-lg text-gray-200 sm:w-40 w-32">
                      Upload
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;

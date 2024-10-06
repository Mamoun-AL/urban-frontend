import React from 'react';

export default function DeleteConfirm({ togglePopup, deleteAd,deletebtn }) {
  return (
    <div className="popupoverlay bg-grayf8 flex justify-center items-center">
      <div className="py-4 px-3 bg-grayf8 w-[30%]">
        <div className="flex justify-between text-green items-center">
          <p className="capitalize text-xl font-medium text-green">Deleting Ad</p>
          <div onClick={togglePopup} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-14 mt-5 text-rosered"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>

        <div className="flex justify-center">
          <p className="capitalize text-black text-center mt-3">
            You are going to delete this ad
            <br />
            Are you sure?
          </p>
        </div>

        <div className="mt-7">
          <button
            onClick={deleteAd} 
            className="bg-[#e13838] flex justify-around hover:bg-[#e02626] text-grayf8 mb-1 w-full py-2 rounded-md text-center capitalize"
          >
            {deletebtn}
          </button>
        </div>

        <div className="mt-2">
          <button
            onClick={togglePopup}
            className="bg-grayd9 hover:bg-[#c9c9c9c9] text-black w-full py-2 rounded-md capitalize"
          >
            No, keep it.
          </button>
        </div>
      </div>
    </div>
  );
}

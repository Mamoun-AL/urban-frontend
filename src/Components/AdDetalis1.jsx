import React, { useEffect, useState } from 'react';
import IconButton from './IconButton';
import AmenitiesBox from './AmenitiesBox'
import ShareBox from './ShareBox';

export default function AdDetalis1({
  AdOwner,
  Bathrooms,
  Bedrooms,
  City,
  Description,
  Facilities,
  Furnished,
  Keywords,
  Neighborhood,
  Price,
  PropType,
  PropertySize,
  Title,
  rent_sale,
  updatedAt,
  createdAt

}) {
  const furnishedText = Furnished ? 'Yes' : 'No';
  const [isOpen1, setIsOpen1] = useState(false);


  const togglePopup1 = () => {
    setIsOpen1(!isOpen1);
  
    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('overflow-hidden');
     }
    };


  return (
    <div>
      <div className='flex justify-between  mt-2 items-center  '>
        <div className='flex gap-x-1 items-baseline'>
          <div className='uppercase text-xl  text-black'>aed</div>
          <div className='text-4xl font-medium text-black'>{Price}</div>
        </div>
        <div className='flex gap-x-3 text-sm font-medium'>
          <div className='flex gap-2 rounded  items-center border hover:bg-grayd9 cursor-pointer border-[#231c2a] capitalize px-3 '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
           <p>favorite</p>
          </div>
          <div onClick={togglePopup1} className='flex gap-2 rounded hover:bg-grayd9 cursor-pointer  items-center border border-[#231c2a] capitalize px-3 '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" /></svg>
           <p>share</p>
          </div>
        </div>
      </div>
      <div className='text-xl mt-2 capitalize  text-black font-medium'> {Neighborhood}, {City}</div>
      <div className='flex gap-x-4 capitalize text-green text-md mt-3'>
      <div className='flex gap-x-1  mr-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#3C6E71" viewBox="-0.5 -0.5 24 24" height="25px" width="25px">
            <path fill="#3C6E71" d="M1.9166666666666667 18.208333333333336V9.703125H2.875V4.791666666666667H20.125V9.703125H21.083333333333336V18.208333333333336H19.645833333333336V16.291666666666668H3.354166666666667V18.208333333333336H1.9166666666666667ZM12.21875 9.703125H18.6875V6.229166666666667H12.21875V9.703125ZM4.3125 9.703125H10.78125V6.229166666666667H4.3125V9.703125ZM3.354166666666667 14.854166666666668H19.645833333333336V11.140625H3.354166666666667V14.854166666666668Z" strokeWidth="1"></path>
          </svg>
          <span>{Bedrooms} beds</span>
        </div>
        <div className=' pr-2 border-[#37373732]  flex gap-x-1'>
          <svg  xmlns="http://www.w3.org/2000/svg" fill="#3C6E71" width="25px" height="25px" viewBox="0 0 32 32">
            <path d="M 26 4 C 23.789063 4 22 5.789063 22 8 L 20 8 L 20 10 L 26 10 L 26 8 L 24 8 C 24 6.808594 24.808594 6 26 6 C 27.191406 6 28 6.808594 28 8 L 28 14 L 1 14 L 1 16 L 2.1875 16 L 3.71875 23.59375 L 3.71875 23.625 C 3.949219 24.65625 4.714844 25.503906 5.71875 25.84375 L 5 28 L 7 28 L 7.65625 26 L 24.34375 26 L 25 28 L 27 28 L 26.28125 25.84375 C 27.328125 25.523438 28.140625 24.683594 28.375 23.625 L 28.375 23.59375 L 29.8125 16 L 31 16 L 31 14 L 30 14 L 30 8 C 30 5.789063 28.210938 4 26 4 Z M 4.21875 16 L 27.8125 16 L 26.40625 23.21875 C 26.289063 23.652344 25.921875 24 25.40625 24 L 6.6875 24 C 6.152344 24 5.789063 23.644531 5.6875 23.1875 Z"/>
          </svg>
          <span>{Bathrooms} baths</span>
        </div>
        
        <div className=' pr-2 border-[#37373732] flex gap-x-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="25px" height="25px">
           <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
         </svg>
          <span>{PropertySize} sqft </span>
        </div>
        </div>
<hr className='mt-4 text-md  text-grayd9'></hr>
        <div className='uppercase text-2xl font-medium mb-5 mt-3'>{Keywords}</div>
        <div className="grid grid-cols-12 gap-x-8 mb-4 mt- font-medium">
            <div className='col-span-5'>
                  <ul className='capitalize text-md'>
                        <li className='flex justify-between  mb-4'>
                              <p className='font-light text-green '>type:</p>
                              <span className='font-normal '>{PropType}</span>
                        </li>
                        <li className='flex justify-between mb-4'>
                              <p className='font-light text-green '>property age:</p>
                              <span className='font-normal '>13 years</span>
                        </li>

                        <li className='flex justify-between mb-4'>
                              <p className='font-light text-green '>Updated:</p>
                              <span className='font-normal '>{updatedAt}</span>
                        </li>
                  </ul>

            </div>
            <div className='col-span-5 border-l ps-8'>
            <ul className='capitalize text-md'>
                        <li className='flex justify-between mb-4'>
                              <p className='font-light text-green '>purpose:</p>
                              <span className='font-normal '>{rent_sale}</span>
                        </li>
                        <li className='flex justify-between mb-4'>
                              <p className='font-light text-green '> furnishing :</p>
                              <span className='font-normal '>{furnishedText}</span>
                        </li>

                        <li className='flex justify-between mb-4'>
                              <p className='font-light text-green '>post owner:</p>
                              <span className='font-normal '>{AdOwner}</span>
                        </li>
                  </ul>
            </div>
        </div>




        <div className='mt-3 capitalize text-sm '>{Description}</div>
        <hr className='mt-4 text-grayd9'></hr>
        <div className='capitalize text-black font-bold mt-5 text-xl'>Amenities</div>
        <div >
        <AmenitiesBox facilities={Facilities} />   
             </div>

             {isOpen1 && (

<ShareBox togglePopup1={togglePopup1}   />
  )}


    </div>
  );
}

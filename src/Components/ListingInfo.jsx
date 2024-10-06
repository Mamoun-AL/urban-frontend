import React from 'react';
import { Link } from 'react-router-dom';

// Accept listing data as props
export default function ListingInfo({
  rent_sale,
AdOwner,
 PropType,
Title,
Price,
Description,
PropertySize,
Bedrooms,
Bathrooms,
Furnished,
Keywords,
City,
Neighborhood,
Facilities,
File
}) {

  return (
    
    <div className='p-4 col-span-7 flex flex-col h-full'>
      {/* Price Information */}
      <div className='listing-price-info flex gap-x-1 items-baseline'>
        <div className='uppercase text-xl font-medium text-black'>aed</div>
        <div className='text-3xl font-medium text-black'>{Price}</div>
        <div className='capitalize'>{rent_sale}</div>
      </div>

      {/* Property Type and Details */}
      <div className='flex gap-x-1 mt-3'>
        <p className='capitalize border-r pr-2 border-[#37373732] font-medium'>{PropType}</p>
        <div className='flex gap-x-1 mr-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24" height="24" width="24">
            <path fill="#000" d="M1.9166666666666667 18.208333333333336V9.703125H2.875V4.791666666666667H20.125V9.703125H21.083333333333336V18.208333333333336H19.645833333333336V16.291666666666668H3.354166666666667V18.208333333333336H1.9166666666666667ZM12.21875 9.703125H18.6875V6.229166666666667H12.21875V9.703125ZM4.3125 9.703125H10.78125V6.229166666666667H4.3125V9.703125ZM3.354166666666667 14.854166666666668H19.645833333333336V11.140625H3.354166666666667V14.854166666666668Z" strokeWidth="1"></path>
          </svg>
          <span>{Bedrooms}</span>
        </div>
        <div className='border-r pr-2 border-[#37373732] flex gap-x-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="21px" viewBox="0 0 32 32">
            <path d="M 26 4 C 23.789063 4 22 5.789063 22 8 L 20 8 L 20 10 L 26 10 L 26 8 L 24 8 C 24 6.808594 24.808594 6 26 6 C 27.191406 6 28 6.808594 28 8 L 28 14 L 1 14 L 1 16 L 2.1875 16 L 3.71875 23.59375 L 3.71875 23.625 C 3.949219 24.65625 4.714844 25.503906 5.71875 25.84375 L 5 28 L 7 28 L 7.65625 26 L 24.34375 26 L 25 28 L 27 28 L 26.28125 25.84375 C 27.328125 25.523438 28.140625 24.683594 28.375 23.625 L 28.375 23.59375 L 29.8125 16 L 31 16 L 31 14 L 30 14 L 30 8 C 30 5.789063 28.210938 4 26 4 Z M 4.21875 16 L 27.8125 16 L 26.40625 23.21875 C 26.289063 23.652344 25.921875 24 25.40625 24 L 6.6875 24 C 6.152344 24 5.789063 23.644531 5.6875 23.1875 Z"/>
          </svg>
          <span>{Bathrooms}</span>
        </div>
        <div className='flex capitalize'>area: <span className='pl-1'>{PropertySize}</span></div>
      </div>

      {/* Keywords */}
      <div className='mt-2 flex-grow'>
        <ul className='text-green text-md keyword-list capitalize flex'>
        {Keywords.split(' ').map((Keywords, index) => (
      <li key={index}>{Keywords.trim()}</li>
    ))}
        </ul>
      </div>

      {/* Location */}
      <div className='flex text-md mt-2 flex-grow'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <ul className='keyword-location capitalize flex'>
          {/* {City.split(',').map((loc, index) => (
            <li key={index}>{loc.trim()}</li>
          ))} */}
          {City}  {Neighborhood}
        </ul>
      </div>

      {/* Contact Buttons */}
      <div className="flex text-md mt-4 gap-x-3">
        <div className='px-3 py-2 rounded-md capitalize bg-[#2a5658c2] flex gap-x-2 text-grayf8'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <p>call</p>
        </div>
        <div className='px-3 py-2 rounded-md capitalize bg-[#2a5658c2] flex gap-x-2 text-grayf8'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <p>message</p>
        </div>
        <div className='px-3 py-2 rounded-md capitalize bg-[#2a5658c2] flex gap-x-2 text-grayf8'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
            <path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z" fill="#f8f8f8"/>
          </svg>
          <p>whatsapp</p>
        </div>
      </div>
    </div>
  );
}

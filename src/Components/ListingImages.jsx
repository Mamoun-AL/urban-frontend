import React, { useEffect, useState } from 'react';

import Gallery from '../Components/Gallery'






export default function ListingImages({ file }) {


  const [isOpen, setIsOpen] = useState(false);


  const togglePopup = () => {
    setIsOpen(!isOpen);
  
    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('overflow-hidden');
     }
    };




  return (
    <div className="grid gap-2 grid-cols-6 max-w-full">
      {/* Large Image */}
      <div className="col-span-4 row-span-3">
        <img
          src={`http://localhost:3000/uploads/${file[0]}`}
          className="rounded-lg  himg cursor-pointer "
          onClick={togglePopup}
          style={{width: '100%', objectFit: 'cover', filter: "grayscale(0%) brightness(1)", transition: "filter 0.3s ease" }}
          onMouseOver={e => e.currentTarget.style.filter = 'grayscale(10%) brightness(0.9)'}
          onMouseOut={e => e.currentTarget.style.filter = 'grayscale(0%) brightness(1)'}
        />
      </div>

      {/* Smaller Images */}
      <div className="col-span-2">
        <img
          src={`http://localhost:3000/uploads/${file[1]}`}
          className="rounded-lg cursor-pointer "
          onClick={togglePopup}
          style={{width: '100%', height: 'auto', objectFit: 'cover', filter: "grayscale(0%) brightness(1)", transition: "filter 0.3s ease" }}
          onMouseOver={e => e.currentTarget.style.filter = 'grayscale(10%) brightness(0.9)'}
          onMouseOut={e => e.currentTarget.style.filter = 'grayscale(0%) brightness(1)'}
        />
      </div>
      <div className="col-span-2">
        <img
          src={`http://localhost:3000/uploads/${file[2]}`}
          className="rounded-lg cursor-pointer "
          onClick={togglePopup}
          style={{width: '100%', height: 'auto', objectFit: 'cover', filter: "grayscale(0%) brightness(1)", transition: "filter 0.3s ease" }}
          onMouseOver={e => e.currentTarget.style.filter = 'grayscale(10%) brightness(0.9)'}
          onMouseOut={e => e.currentTarget.style.filter = 'grayscale(0%) brightness(1)'}
        />
      </div>


      {isOpen && (

<Gallery togglePopup={togglePopup} images={file}  />
  )}





    </div>

  );
}

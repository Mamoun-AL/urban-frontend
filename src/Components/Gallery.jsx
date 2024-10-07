import React from 'react';

const Gallery = ({ togglePopup, images }) => {
  // Function to group images according to the alternating pattern
  const getRows = (images) => {
    const rows = [];
    let i = 0;
    
    while (i < images.length) {
      // Determine the number of images for this row
      const rowLength = (rows.length % 2 === 0) ? 1 : 2;
      // Slice the images for this row
      rows.push(images.slice(i, i + rowLength));
      // Move to the next set of images
      i += rowLength;
    }
    
    return rows;
  };

  // Group images into rows with alternating patterns
  const rows = getRows(images);

  return (
    <div className="popupoverlay bg-grayf8 flex justify-center items-center">
      <div className="py-10 px-3 relative bg-grayf8 w-[70%]">
        {/* Close Button */}
        <div
          onClick={togglePopup}
          className="close-button sticky top-4 right-0 cursor-pointer z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="myshadow h-[80vh]  p-2 overflow-y-auto">
          <div className="bg-grayf8">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid gap-4 ${row.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}
              >
                {row.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={`https://urban-backend-2.onrender.com/uploads/${image}`}
                    alt={`Gallery Image ${rowIndex * 2 + imageIndex + 1}`}
                    className={`object-cover ${row.length === 1 ? 'w-full h-[400px]' : 'w-full h-[300px]'} hover:scale-105  mb-4 cursor-pointer duration-300`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

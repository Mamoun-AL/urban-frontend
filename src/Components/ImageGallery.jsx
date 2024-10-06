import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const ImageGallery = ({ File }) => {
  // Check if File prop is provided and is an array
  if (!Array.isArray(File)) {
    console.error('Invalid File prop:', File);
    return <p>No images available.</p>;
  }

  return (
    <div className='col-span-5 img-box rounded-[inherit]'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {File.length > 0 ? (
          File.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={`http://localhost:3000/uploads/${img}`}
                alt={`Uploaded ${index}`}
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <p>No images available</p>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default ImageGallery;

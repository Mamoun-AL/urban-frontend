// AmenitiesBox.js
import React from 'react';
import AmentieBox from './AmentieBox';
import { facilityIcons } from './facilityIcons';

const AmenitiesBox = ({ facilities }) => {
  return (
    <div className="grid grid-cols-5 gap-5 mt-7" >
      {facilities.map((facility, index) => {
        const icon = facilityIcons[facility] || <span>Icon not found</span>;

        return (
          <AmentieBox key={index} text={facility} icon={icon} />
        );
      })}
    </div>
  );
};

export default AmenitiesBox;

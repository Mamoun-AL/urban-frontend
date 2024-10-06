import React from 'react';

const PrimaryBtn = ({ text, classnames ,disabled,onClick}) => {
  return (
    <button   disabled={disabled}
     className={`text-grayf8 capitalize bg-green ${classnames}`}
     onClick={onClick} 
     >
      {text}
    </button>
  );
};

export default PrimaryBtn;

import React from 'react';
const StatBoxes = ({ text,number,bgcolor,txtcolor }) => {
  return (
    <div className={`${bgcolor} px-7 py-9 rounded-2xl ${txtcolor} capitalize font-bold`}>
      <p className='pb-7 text-4xl'>{number}</p>
      <p className='text-xl  capitalize pb-2'>{text}</p>
    </div>
  );
};

export default StatBoxes;

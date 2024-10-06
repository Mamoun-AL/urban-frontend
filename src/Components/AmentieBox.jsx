import React from 'react';

export default function AmentieBox({ text, icon }) {
  return (
    <div className='bg-[#eaeaea] rounded-lg bs1 py-3'>
      <div className='flex flex-col items-center'>
        {icon}
        <p className='capitalize text-md font-medium text-black'>{text}</p>
      </div>
    </div>
  );
}

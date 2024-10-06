import React from 'react'

export default function ShareLinkicons({ href, name, icon }) {
  return (
    <a href={href} className='flex flex-col cursor-pointer items-center'>
      {icon}
      <p className='capitalize font-light mt-1'>{name}</p>
    </a>
  );
}

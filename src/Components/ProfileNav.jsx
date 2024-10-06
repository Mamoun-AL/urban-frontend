// ProfileNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from './IconButton.jsx';

// Define the ProfileNav component
const ProfileNav = ({ links }) => {
  return (
    <div className=''>
      <div className='flex flex-col pt-2 pb-2 rounded-xl bs1 border border-grayd9 bg-grayf8'>
        {links.map((link, index) => (
          <Link to={link.path} key={index} className='hover:bg-[#f1f1f1]'>
            <IconButton 
              text={link.text} 
              onClick={() => {}} // Use a proper function or remove if not needed
              icon={link.icon}
              className="text-green gap-x-2 text-lg capitalize pb-2"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileNav;

// ProfilePage.jsx
import React from 'react';
import ProfileNav from '../Components/ProfileNav.jsx';
import ProfileEdit from '../Components/ProfileEdit.jsx';
import { links } from '../data/ProfileNavLinks.jsx'; 

// Define the links array with example data


const ProfilePage = () => {
  return (
    <div>
      <h1 className='capitalize text-3xl mb-8 first-letter text-black'>Profile Settings</h1>

      <div className='grid grid-cols-4 gap-10'>
        <div className='col-span-1'>
          {/* Pass the links prop to ProfileNav */}
          <ProfileNav links={links} />
        </div>
        <div className='col-span-2'>
          <ProfileEdit />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

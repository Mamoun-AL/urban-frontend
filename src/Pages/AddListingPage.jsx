// ProfilePage.jsx
import React from 'react';
import ProfileNav from '../Components/ProfileNav.jsx';
import NewAdForm from '../Components/NewAdForm.jsx';
import { links } from '../data/AdsNavlinks.jsx'; 

// Define the links array with example data


const ProfilePage = () => {
  return (
    <div>
      <h1 className='capitalize text-3xl mb-8 first-letter text-black'>manage ads</h1>

      <div className='grid grid-cols-4 gap-10'>
        <div className='col-span-1'>
          {/* Pass the links prop to ProfileNav */}
          <ProfileNav links={links} />
        </div>
        <div className='col-span-3'>

       <NewAdForm/>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

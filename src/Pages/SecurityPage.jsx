import React, { useState } from 'react';
import ProfileNav from '../Components/ProfileNav';
import SecurityEdit from '../Components/SecurityEdit';
import { links } from '../data/ProfileNavLinks.jsx'; 

const SecurityPage = () => {
      return(
        <div>
        <h1 className='capitalize text-3xl  mb-8 first-letter  text-black '>profile settings</h1>

      
        <div className='grid grid-cols-4 gap-10 '>
          <div  className='col-span-1'  >
          <ProfileNav links={links}/>
          </div>
          <div  className='col-span-2'  >
          <SecurityEdit />
          </div>
            </div>
        </div>
      );


}
export default SecurityPage;

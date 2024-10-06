import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext.jsx';
import PrimaryBtn from './PrimaryBtn';
import axios from 'axios';  // Make sure axios is installed and imported

const ProfileEdit = () => {
  const { user, setUser } = useContext(UserContext);

  // State to manage form inputs
  const [email, setEmail] = useState(user.email || '');
  const [name, setName] = useState(user.name || '');
  const [innerSubBtn, setinnerSubBtn] = useState('save changes')
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const handleChange = (ev) => {
    const { id, value } = ev.target;
    if (id === 'name') {
      setName(value);
    } else if (id === 'email') {
      setEmail(value);
    }
  };

  const handleBlur = (ev) => {
    // Handle blur if necessary
  };

  const handleProfileChange = async (ev) => {
    ev.preventDefault();
    try {
      setError(''); // Clear previous errors
      setinnerSubBtn(<div class="loader"></div>)      
      const response = await axios.post('/profile/edit', { name, email });
      setUser({ ...user, name, email }); // Update context with new values
      setSuccess('Your deatils has been edited successfully!');

      setTimeout(() => {
        window.location.href = '/profile';
      }, 2000); // Adjust delay as needed
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'An unexpected error occurred';
      setError('An unexpected error occurred.');

    }
    finally{
      setinnerSubBtn('save changes')
    }
  };

  return (
    <div>
      <form onSubmit={handleProfileChange}>
        <div>
          <label className='block capitalize mb-1 font-medium' htmlFor="name">Full Name</label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1`}
            type="text"
            required
            id="name"
            placeholder='Enter your full name'
            value={name}
          />
        </div>
        <div className='mt-4'>
          <label className='block capitalize mb-1 font-medium' htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1`}
            type="email"
            required
            id="email"
            placeholder='Enter your email'
            value={email}
          />
        </div>
        {error && (
        <div className="bg-red-100 mt-2 text-rosered rounded mb-4">
          <strong>Error:</strong> {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 mt-2 text-green rounded mb-4">
          <strong>Success:</strong> {success}
        </div>
      )}
        

        <div className='mt-5 flex justify-end'>
        <PrimaryBtn type="submit" text={innerSubBtn} classnames="py-2 hover:bg-[#3C7E71] px-3 min-w-[104px] flex items-center justify-center rounded" />
        </div>
      </form>
    </div>
  );
};

// Simulate network latency function
const simulateNetworkLatency = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default ProfileEdit;

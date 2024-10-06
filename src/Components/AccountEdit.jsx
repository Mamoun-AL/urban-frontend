import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext.jsx';
import PrimaryBtn from './PrimaryBtn';
import axios from 'axios';  // Make sure axios is installed and imported

const AccountEdit = () => {

  const { user, setUser } = useContext(UserContext);
  const [innerSubBtn, setinnerSubBtn] = useState('save changes')
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const  [Number, setNumber] = useState(user.Number || '');

 

  const handleChange = (ev) => {
    const { id, value } = ev.target;
    if (id === 'Number') {
      setNumber(value);
    } 
  };

  const handleBlur = (ev) => {
    // Handle blur if necessary
  };

  const handelAccountEdit = async (ev) => {
    ev.preventDefault();
    try {
      setError(''); // Clear previous errors
      setinnerSubBtn(<div class="loader"></div>)
      await simulateNetworkLatency(1000); // Simulate network latency
      const response = await axios.post('/account/edit', { Number });

      setSuccess('Your deatils has been edited successfully!');
      setTimeout(() => {
        window.location.href = '/account';
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
      <form onSubmit={handelAccountEdit}>
        <div>
          <label className='block capitalize mb-1 font-medium' htmlFor="name">phone number</label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1`}
            type="int"
            required
            id="Number"
            placeholder='Enter your phone number'
            value={Number}
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

          <PrimaryBtn type="submit" text={innerSubBtn} classnames="py-2 px-3 hover:bg-[#3C7E71] min-w-[104px] flex items-center justify-center rounded" />

        </div>
        
      
      </form>
    </div>
  );
};

// Simulate network latency function
const simulateNetworkLatency = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default AccountEdit;

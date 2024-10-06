import React, { useState } from 'react';
import axios from 'axios';  // Make sure axios is installed and imported
import PrimaryBtn from './PrimaryBtn';

const SecurityEdit = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    reenterNewPassword: ''
  });
  
  const [error, setError] = useState(null); // For displaying error messages
  const [success, setSuccess] = useState(null); // For displaying success messages
  const [innerSubBtn, setinnerSubBtn] = useState('save changes')
  const [errorres, setErrorres] = useState('');
  const [successres, setSuccessres] = useState('');


  const handleChange = (ev) => {
    const { id, value } = ev.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const handleBlur = (ev) => {
    // Handle blur if necessary
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    // Simple client-side validation
    if (formData.newPassword !== formData.reenterNewPassword) {
      setError('New passwords do not match');
      return;
    }

    try {
      setError(''); 
      setinnerSubBtn(<div class="loader"></div>)      

      const response = await axios.post('/security/edit', formData);
      setSuccess('Password updated successfully');
  

      setTimeout(() => {
        window.location.href = '/security'; // Ensure the URL is correct
      }, 2000); // Adjust delay as needed
    } catch (error) {
      setError(error.response?.data?.message || 'An unexpected error occurred');
      setSuccess(null);
    }
    finally{
      setinnerSubBtn('save changes')
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="oldPassword">Old Password</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1"
          type="password"
          required
          id="oldPassword"
          placeholder='Enter your old password'
          value={formData.oldPassword}
        />
      </div>
      <div>
        <label htmlFor="newPassword">New Password</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1"
          type="password"
          required
          id="newPassword"
          placeholder='Enter your new password'
          value={formData.newPassword}
        />
      </div>
      <div>
        <label htmlFor="reenterNewPassword">Re-enter New Password</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1"
          type="password"
          required
          id="reenterNewPassword"
          placeholder='Re-enter your new password'
          value={formData.reenterNewPassword}
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
  );
};

export default SecurityEdit;

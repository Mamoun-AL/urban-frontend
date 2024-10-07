import React, { useState,useEffect  } from 'react';
import UrbanLogo from './UrbanLogo';
import PrimaryBtn from './PrimaryBtn';
import axios from 'axios';
import { useUser } from './UserContext';
import Spinner from './Spinner';
import {  useNavigate } from 'react-router-dom';



const Login = ({ togglePopup }) => {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    // if (isAuthenticated) {
    //   navigate('/'); // Redirect to home page or another page
    // }
  }, [isAuthenticated, navigate]);


  const [email, setEmail] = useState('');
  const [email1, setEmail1] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [name, setName] = useState('');
  const [successmsg, setSuccessmsg] = useState('');
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError1, setEmailError1] = useState('');
  const [passwordError1, setPasswordError1] = useState('');
  const [nameError, setNameError] = useState('');
  const [currentPage, setCurrentPage] = useState('login');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState('')
  const currentPath = location.pathname;
 

  const isLoginButtonDisabled = !email || !password || isSubmitting || emailError || passwordError;
  const isRegisterButtonDisabled = !name || !email1 || !password1 || isSubmitting || nameError || emailError1 || passwordError1;

  const simulateNetworkLatency = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const validateInput = (value, type) => {
    const regexPatterns = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      text: /^[a-zA-Z]{3,20}$/
    };
    return regexPatterns[type]?.test(value) || false;
  };

  const handleChange = (ev, ReqName) => {
    const { value, type } = ev.target;

    if (type === 'email') {
      if (ReqName === 'login') {
        setEmail(value);
        setEmailError(validateInput(value, 'email') ? '' : 'Invalid email address');
      } else {
        setEmail1(value);
        setEmailError1(validateInput(value, 'email') ? '' : 'Invalid email address');
      }
    } else if (type === 'password') {
      if (ReqName === 'login') {
        setPassword(value);
        setPasswordError(validateInput(value, 'password') ? '' : 'Invalid password');
      } else {
        setPassword1(value);
        setPasswordError1(validateInput(value, 'password') ? '' : 'Invalid password');
      }
    } else if (type === 'text') {
      setName(value);
      setNameError(validateInput(value, 'text') ? '' : 'Invalid name');
    }

    // Update touched state
    if (ReqName === 'login') {
      setTouched(prev => ({ ...prev, [type]: true }));
    } else {
      setTouched(prev => ({ ...prev, [`${type}1`]: true }));
    }
  };

  const handleBlur = (ev, Req) => {
    const { value, type } = ev.target;

    // Update touched state
    if (Req === 'login') {
      setTouched(prev => ({ ...prev, [type]: true }));
    } else {
      setTouched(prev => ({ ...prev, [`${type}1`]: true }));
    }

    if (!validateInput(value, type)) {
      if (type === 'email') {
        Req === 'login' ? setEmailError('Invalid email address') : setEmailError1('Invalid email address');
      } else if (type === 'password') {
        Req === 'login' ? setPasswordError('Invalid password') : setPasswordError1('Invalid password');
      } else if (type === 'text') {
        setNameError('Invalid name');
      }
    } else {
      if (type === 'email') {
        Req === 'login' ? setEmailError('') : setEmailError1('');
      } else if (type === 'password') {
        Req === 'login' ? setPasswordError('') : setPasswordError1('');
      } else if (type === 'text') {
        setNameError('');
      }
    }
  };

  function handleLoginTab(LoginTab) {
    return () => setCurrentPage(LoginTab);
  }

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    setIsSubmitting(true);

    try {
  await simulateNetworkLatency(1000); 
  const response = await axios.post('/users/login', { email, password }, { withCredentials: true });

  // No need to manually set the token in local storage
  // const { token } = response.data; 

  setSuccessmsg("Login successful! Redirecting...");
  setError('');
  
  // Optionally, redirect or update state here
  setTimeout(() => {
    // window.location.href = '/';
  }, 2000); // Adjust delay as needed
} catch (error) {
      const errorMessage = error.response?.data?.error || 'An unexpected error occurred';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleRegisterSubmit(ev) {
    ev.preventDefault();
    setIsSubmitting(true);

    try {
      await simulateNetworkLatency(1000);
      await axios.post('/users/register', { name: name, email: email1, password: password1 });
      await axios.post('/users/login', { email: email1, password: password1 });

      setError1('');
      setSuccessmsg("Registration successful! Logging in...");
      setTimeout(() => {
        window.location.href = '/';
      }, 2000); // Adjust delay as needed
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'An unexpected error occurred';
      setError1(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={`flex justify-around  ${currentPath === '/login' ? 'bg1' : 'popupoverlay'} `}>
      {isSubmitting && <Spinner />}

      {currentPage === 'login' && !isSubmitting && (
        <form onSubmit={handleLoginSubmit} className='w-[470px]  myshadow relative px-10 py-16 flex flex-col justify-between bg-grayf8'>
          <div onClick={togglePopup} className='close-button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
          <div className='mx-auto mb-14'>
            <UrbanLogo />
          </div>
          <div>
            <label className='block capitalize mb-1 font-medium' htmlFor="email-login">Email Address</label>
            <input
              value={email}
              onChange={(ev) => handleChange(ev, 'login')}
              onBlur={(ev) => handleBlur(ev, 'login')}
              className={`w-full rounded-md py-2 bg-grayf8 border-2 px-1 ${emailError ? 'border-rosered' : 'border-green'}`}
              type="email"
              required // Correct
              id="email-login"
              placeholder='Enter Email'
            />
            {emailError && <div className="error-box text-[#dc2626]">{emailError}</div>}
          </div>
          <div>
            <label className='block capitalize mb-1 mt-3 font-medium' htmlFor="password-login">Password</label>
            <input
              value={password}
              onChange={(ev) => handleChange(ev, 'login')}
              onBlur={(ev) => handleBlur(ev, 'login')}
              className={`w-full rounded-md border-2 py-2 px-1 bg-grayf8 ${passwordError ? 'border-rosered' : 'border-green'}`}
              type="password"
              required // Correct
              id="password-login"
              placeholder='Enter Password'
            />
            {passwordError && <div className="error-box text-[#dc2626]">{passwordError}</div>}
          </div>
          <PrimaryBtn text="Login" disabled={isLoginButtonDisabled} type="submit" classnames="w-full disabled:opacity-75 py-2 mt-12" />
          {error && <div className="error-box text-[#dc2626]">{error}</div>}
          {successmsg && <div className="text-[#1e733d] capitalize">{successmsg}</div>}
          <div className="mx-auto mt-2">
            <p>Don’t have an account? <span onClick={handleLoginTab('register')} className='text-lightblue cursor-pointer'>Register</span></p>
          </div>
        </form>
      )}

      {currentPage === 'register' && !isSubmitting && (
        <form onSubmit={handleRegisterSubmit} className=' myshadow relative w-[470px] px-10 py-16 flex flex-col justify-between bg-grayf8'>
          <div onClick={togglePopup} className='close-button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
          <div className='mx-auto mb-14'>
            <UrbanLogo />
          </div>
          <div>
            <label className='block capitalize mb-1 font-medium' htmlFor="name-register">Name</label>
            <input
              value={name}
              onChange={(ev) => handleChange(ev, 'register')}
              onBlur={(ev) => handleBlur(ev, 'register')}
              className={`w-full rounded-md border-2 py-2 px-1 bg-grayf8 ${nameError ? 'border-rosered' : 'border-green'}`}
              type="text"
              id="name-register"
              placeholder='Enter Your Name'
            />
            {nameError && <div className="error-box text-[#dc2626]">{nameError}</div>}
          </div>
          <div>
            <label className='block capitalize mb-1 mt-3 font-medium' htmlFor="email-register">Email Address</label>
            <input
              value={email1}
              onChange={(ev) => handleChange(ev, 'register')}
              onBlur={(ev) => handleBlur(ev, 'register')}
              className={`w-full rounded-md border-2 py-2 px-1 bg-grayf8 ${emailError1 ? 'border-rosered' : 'border-green'}`}
              type="email"
              required // Correct
              id="email-register"
              placeholder='Enter Email'
            />
            {emailError1 && <div className="error-box text-[#dc2626]">{emailError1}</div>}
          </div>
          <div>
            <label className='block capitalize mb-1 mt-3 font-medium' htmlFor="password-register">Password</label>
            <input
              value={password1}
              onChange={(ev) => handleChange(ev, 'register')}
              onBlur={(ev) => handleBlur(ev, 'register')}
              className={`w-full rounded-md border-2 py-2 px-1 bg-grayf8 ${passwordError1 ? 'border-rosered' : 'border-green'}`}
              type="password"
              required // Correct
              id="password-register"
              placeholder='Enter Password'
            />
            {passwordError1 && <div className="error-box text-[#dc2626]">{passwordError1}</div>}
          </div>
          {error1 && <div className="error-box text-[#dc2626]">{error1}</div>}
          {successmsg && <div className="text-[#1e733d] capitalize">{successmsg}</div>}
          <PrimaryBtn text="Register" disabled={isRegisterButtonDisabled} type="submit" classnames="w-full disabled:opacity-75 py-2 mt-12" />
          <div className="mx-auto mt-2">
            <p>Already have an account? <span onClick={handleLoginTab('login')} className='text-lightblue cursor-pointer'>Sign In</span></p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;

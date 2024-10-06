import React, { useState } from 'react';
import UrbanLogo from './UrbanLogo';
import PrimaryBtn from './PrimaryBtn';
import axios from "axios";




const Login = ({togglePopup}) =>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function HandleLoginTab(LoginTab){
      setPassword(LoginTab)
  }
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const {data} = await axios.post('/login', {email,password});
      alert(data.email);

    }  catch (error) {
    alert(error)
    alert("sdfsd")

    }
  }

      
  return (
    <div className=' flex justify-around popupoverlay'>

      <form onSubmit={handleLoginSubmit}  className='w-[470px] px-10 py-16   flex flex-col justify-between  bg-grayf8' >
      <div onClick={togglePopup}  className='close-button'>x</div>
            <div className='mx-auto mb-14'>
            <UrbanLogo />
            </div>
          
            <div>
                  <label className='block capitalize mb-1 font-medium' htmlFor="email">email address</label>
                  <input value={email}    onChange={ev => setEmail(ev.target.value)}  className='w-full rounded-md py-2 px-1 bg-grayf8 border-green border-2' type="text" id="email"  placeholder='Enter Email'/>
            </div>

            <div>
                  <label className='block capitalize mb-1 mt-3 font-medium' htmlFor="password">password</label>
                  <input value={password}    onChange={ev => setPassword(ev.target.value)}  className='w-full rounded-md py-2 px-1 bg-grayf8 border-green border-2' type="password" id="password"  placeholder='Enter Password'/>
            </div>
            <PrimaryBtn text="login" type="submit" classnames="w-full py-2 mt-12" />
            <p>already have an account?  <span className='text-lightblue'>sign in</span> </p>
      </form>    
    </div>
  )
};
export default Login;


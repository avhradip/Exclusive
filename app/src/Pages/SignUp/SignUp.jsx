import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import b from '/sss.png'
import icon from '/icon.png'
import { useNavigate } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(true)
  const [login, setLogin] = useState(true)


  const logIn = () => {
    login ? navigate('/') :<Toaster
    position="top-center"
    reverseOrder={false}
  />
  }

  return (
    <div className="flex flex-1 flex-wrap justify-around py-10">
      <div>
        <img src={b} alt="img" />
      </div>
      <div className='flex justify-center items-center pt-5'>
        {toggle ?
          <div className='flex flex-col gap-10'>
            <div>
              <p className='text-3xl font-semibold pb-5'>Create an account</p>
              <p>Enter your details below</p>
            </div>
            <TextField id="standard-basic" label="Name" variant="standard" />
            <TextField id="standard-basic" label="Email or Phone Number" variant="standard" />
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <div className='flex flex-col gap-5'>
              <button className='bg-[#DB4444] px-4 py-3 text-[#fff]'>Create Account</button>
              <button className='flex items-center gap-2 border-2 border-[#eee] px-4 py-3'><img src={icon} alt="" />Sign up with Google</button>
            </div>
            <div className='flex gap-2'>
              <p className='text-[#767272]'>Already have account?</p>
              <p className='underline cursor-pointer' onClick={() => setToggle(!toggle)}>Log in</p>
            </div>
          </div> :
          <div>
            <div>
              <p className='text-3xl font-semibold pb-5'>Log in to Exclusive</p>
              <p className='pb-5'>Enter your details below</p>
            </div>
            <div className='flex flex-col gap-10'>
              <TextField id="standard-basic" label="Email or Phone Number" variant="standard" />
              <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
              />
            </div>
            <div className='flex justify-between mt-10 items-center'>
              <button className='bg-[#DB4444] text-[#fff] rounded-[5px] px-4 py-2' onClick={() => logIn()}>Log In</button>
              <p className='text-[#DB4444] cursor-pointer'>Forget Password?</p>
            </div>
          </div>
        }
      </div>

    </div>
  );
};

export default Login;

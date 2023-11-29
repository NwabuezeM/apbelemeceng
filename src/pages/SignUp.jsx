import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import OrAuth from '../components/OrAuth';


export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const {name, email, password} = formData
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>
      <div className='flex justify-center flex-wrap items-center py-6 px-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='key' className='rounded-2xl w-full' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
          <input type='text' id='name' value={name} onChange={onChange} className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' placeholder='Full Name'/>
          <input type='email' id='email' value={email} onChange={onChange} className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' placeholder='Email Address'/>
            <div className='relative mb-6'>
            <input type={showPassword ? "text" : "password"} id='password' value={password} onChange={onChange} className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' placeholder='Password'/>
            {showPassword ? <FaEyeSlash className='absolute top-3.5 right-3 text-xl cursor-pointer' onClick={() => setShowPassword((prevState) => !prevState)} /> : <FaEye className='absolute top-3.5 right-3 text-xl cursor-pointer' onClick={() => setShowPassword((prevState) => !prevState)} />

}
            </div>
            <div className='flex justify-between text-sm sm:text-lg'>
              <p className='mb-6'>
                Have an account already?
                <Link to='/sign-in' className='text-[#0077be] hover:text-red-500 transition duration-200 ease-in-out ml-1'> Sign In</Link>
              </p>
              {/**  <p>
                <Link to='/forgot-password' className='text-[#0077be] hover:text-red-500 transition duration-200 ease-in-out'> Forgot Password?</Link>
              </p> */}
            </div>
            <button type="submit" className='bg-[#0077ee] text-white w-full py-3 mx-auto rounded-[8px] hover:bg-[#454b4e] font-medium uppercase shadow-md transition duration-300 ease-in-out'>Sign up</button>
            <div className='my-4 before:border-t flex before:flex-1 items-center before:border-gray-400 after:border-t after:flex-1 after:border-gray-400'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>
            <OrAuth />
          </form>
        </div>
      </div>
    </section>
  )
}

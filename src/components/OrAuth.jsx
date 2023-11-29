import React from 'react'
import { FcGoogle } from "react-icons/fc";

export default function OrAuth() {
  return (
    <button className='flex items-center justify-center bg-red-400 w-full py-3 rounded-[8px] text-white gap-2 hover:bg-red-800 text-sm sm:text-lg uppercase transition duration-300 ease-in-out'>
        <FcGoogle className='text-[1.3rem] bg-white rounded-full' />
        Continue with Google
    </button>
  )
}

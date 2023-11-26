import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const pathMatchRoute = (route) => {
    if(route === location.pathname) {
      return true
    }
  }
  return (
    <div className='bg-white border-b sticky top-0 z-999 shadow-md'>
    <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
      <div>
        <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt='Logo' className='w-14 h-14 cursor-pointer' onClick={() => navigate("/")}
        />
      </div>
      <div>
        <ul className='flex justify-center items-center space-x-10'>
        <li className={`cursor-pointer hover:text-red-500 py-3 text-lg font-semibold border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"}`}
        onClick={() => navigate("/")}
         >Home</li>
          <li className={`cursor-pointer hover:text-red-500 py-3 text-lg font-semibold border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}
          onClick={() => navigate("/offers")}
          >Products</li>
          <li className={`cursor-pointer hover:text-red-500 py-3 text-lg font-semibold border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-in") && "text-black border-b-red-500"}`}
          onClick={() => navigate("/sign-in")}
          >Sign In</li>
        </ul>
      </div>
    </header>
    </div>
  )
}

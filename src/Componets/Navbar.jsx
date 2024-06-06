import React from 'react'
import Logo from '/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
<div className="navbar bg-base-100 ">

  <div className="flex-none ">
    <button className="btn btn-square btn-ghost hidden md:block lg:hidden md:mx-8 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
  <div className="flex-1 flex items-center  md:justify-center lg:justify-between  md:mx-4 lg:mx-6">
   
      
  <div className="flex items-center md:mr-52 md:ml-28 lg:ml-0"> 
      <img src={Logo} className="h-8 md:h-10 lg:h-12 w-auto m-3 " alt="Logo" />
      <h1 className="font-bold text-lg">Travlog</h1>
    </div>
   
    <ul className="hidden lg:flex space-x-11 ">
      <li className='text-gray-500 font-sans text-md'><Link>Home</Link></li>
      <li className='text-gray-500 font-sans text-md'><Link>Discover</Link></li>
      <li className='text-gray-500 font-sans text-md'><Link>Special Deals</Link></li>
      <li className='text-gray-500 font-sans text-md'><Link>Contact</Link></li>
    </ul>
    <div className="flex-none space-x-2 md:ml-11 hidden md:block lg:block">
      <button className="bg-white rounded-lg p-2 font-medium">Login</button>
      <button className="bg-blue-800 rounded-3xl px-4 py-2 text-white font-medium">Sign up</button>
    </div>
  </div>
  <div className="flex-none ">
    <button className="btn btn-square btn-ghost  md:hidden lg:hidden md:mx-8 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>

</div>

    </>
  )
}

export default Navbar

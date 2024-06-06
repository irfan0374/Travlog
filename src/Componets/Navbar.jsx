import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '/Logo.png';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mobileDrawer, setmobileDrawer] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const mobileToggleDrawer = () => {
    setmobileDrawer(!mobileDrawer)
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost hidden md:block lg:hidden"
          onClick={toggleDrawer}
          aria-label="Toggle drawer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {isDrawerOpen && (
          <div className="drawer fixed inset-1 z-40">
            <div className=" fixed inset-0 bg-gray-800 opacity-50" onClick={toggleDrawer}></div>
            <div className=" fixed top-0 left-0 bottom-0 bg-base-200 w-80 p-2 text-base-content border-r border-gray-300">
              <ul className="menu mt-8 ml-4">
                <li className='font-bold text-xl border border-gray-400 shadow-xl py-2 content-center rounded-xl mt-8'><Link to="/">Home</Link></li>
                <li className='font-bold text-xl border border-gray-400 shadow-xl py-2 content-center rounded-xl mt-8'><Link to="/">Discover</Link></li>
                <li className='font-bold text-xl border border-gray-400 shadow-xl py-2 content-center rounded-xl mt-8'><Link to="/">Special Deals</Link></li>
                <li className='font-bold text-xl border border-gray-400 shadow-xl py-2 content-center rounded-xl mt-8'><Link to="/">Contact</Link></li>

              </ul>
            </div>

          </div>
        )}

      </div>
      <div className="flex-1 flex items-center justify-between md:justify-center lg:justify-between md:mx-4 lg:mx-6">
        <div className="flex items-center md:mr-52 md:ml-28 lg:ml-0">
          <img src={Logo} className="h-8 md:h-10 lg:h-12 w-auto m-3" alt="Logo" />
          <h1 className="font-bold text-lg">Travlog</h1>
        </div>
        <ul className="hidden lg:flex space-x-11">
          <li className="text-gray-500 font-sans text-md"><Link to="/">Home</Link></li>
          <li className="text-gray-500 font-sans text-md"><Link to="/discover">Discover</Link></li>
          <li className="text-gray-500 font-sans text-md"><Link to="/deals">Special Deals</Link></li>
          <li className="text-gray-500 font-sans text-md"><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="flex-none space-x-2 md:ml-11 hidden md:block lg:block">
          <button className="bg-white rounded-lg p-2 font-medium">Login</button>
          <button className="bg-blue-800 rounded-3xl px-4 py-2 text-white font-medium">Sign up</button>
        </div>
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost block md:hidden lg:hidden"
            onClick={mobileToggleDrawer}
            aria-label="Toggle drawer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          {mobileDrawer && (
     
            <div className="drawer drawer-end fixed inset-1 z-40">
              <div className=" fixed inset-0 bg-gray-800 opacity-50" onClick={mobileToggleDrawer}></div>
              <div className=" fixed top-0 right-0 bottom-0 bg-base-200 w-64 p-2 text-base-content border-r border-gray-300">
                <ul className="menu mt-3 ml-3">
                  <li className='font-bold text-xl border border-gray-400 shadow-lg content-center rounded-xl mt-8'><Link to="/">Home</Link></li>
                  <li className='font-bold text-xl border border-gray-400 shadow-lg content-center rounded-xl mt-8'><Link to="/">Discover</Link></li>
                  <li className='font-bold text-xl border border-gray-400 shadow-lg content-center rounded-xl mt-8'><Link to="/">Special Deals</Link></li>
                  <li className='font-bold text-xl border border-gray-400 shadow-lg content-center rounded-xl mt-8'><Link to="/">Contact</Link></li>
                  <li className='font-bold text-xl border border-gray-400 shadow-lg content-center rounded-xl mt-8'><Link to="/">Login</Link></li>
                  <li className='font-bold text-xl border border-gray-400 shadow-lg content-center rounded-xl mt-8'><Link to="/">SignUp</Link></li>

                </ul>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;

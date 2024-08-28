import React from 'react';
import logo from '../assets/Logo.png'
function Nav() {
  return (
    <>
      {/* Main navbar container */}
      <div className="navbar bg-base-100">
        {/* Navbar start: Hamburger menu for mobile and links for larger screens */}
        <div className="navbar-start">
          {/* Hamburger menu (visible on small screens only) */}
          <div className="dropdown lg:hidden">
            {/* Button to toggle dropdown */}
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            {/* Dropdown menu for mobile */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
            >
              <li><a>Start</a></li>
              <li><a>Shows</a></li>
              <li><a>Movies</a></li>
              <li><a>New</a></li>
              <li><a>My List</a></li>
            </ul>
          </div>

          {/* Menu for larger screens (hidden on small screens) */}
          <div className="navbar-center lg:navbar-start flex">
          <img src={logo} className='h-[30px] p-[3px] mt-[10px]'></img>
          <div className="hidden lg:flex">
            <a href="#" className="btn btn-link text-white no-underline normal-case text-lg">Start</a>
            <a href="#" className="btn btn-link text-white no-underline normal-case text-lg">Shows</a>
            <a href="#" className="btn btn-link text-white no-underline normal-case text-lg">Movies</a>
            <a href="#" className="btn btn-link text-white no-underline normal-case text-lg">New</a>
            <a href="#" className="btn btn-link text-white no-underline normal-case text-lg">My List</a>
          </div>
          </div>
          
        </div>

        {/* Navbar center: Brand name/logo */}
        

        {/* Navbar end: Search and notification buttons */}
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;

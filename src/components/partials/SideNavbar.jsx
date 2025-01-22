import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu Button for Small Screens */}
      <button
        className="fixed top-6 left-4 z-50 lg:hidden text-white shadow-lg"
        onClick={toggleSidebar}
      >
        <i className="ri-menu-line text-2xl border border-[#6556CD] p-3 rounded-full "></i>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#1F1E24] border-r border-gray-700 py-10 px-8 z-40 transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full overflow-hidden overflow-y-scroll"
        } lg:translate-x-0 lg:w-[17%]`}
      >
        {/* Logo Section */}
        <div className="text-center text-2xl text-white font-bold flex flex-col mb-6">
          <Link
            className="flex items-center justify-center gap-2"
            to="/"
            onClick={() => setIsOpen(false)} // Close sidebar on link click
          >
            <img
              className="bg-white rounded w-10 h-10 object-contain"
              src="/logoImage.png"
              alt="Logo"
            />
            <h1 className="text-3xl">CAPSTAB</h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="text-zinc-400 flex flex-col gap-3">
          <h1 className="text-white font-semibold text-lg mb-2">New Feeds</h1>

          <Link
            to="/trending"
            className="text-base font-semibold hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3"
            onClick={() => setIsOpen(false)}
          >
            <i className="mr-1 ri-fire-fill"></i> Trending
          </Link>

          <Link
            to="/popular"
            className="text-base font-semibold hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3"
            onClick={() => setIsOpen(false)}
          >
            <i className="mr-1 ri-numbers-fill"></i> Popular
          </Link>

          <Link
            to="/movies"
            className="text-base font-semibold hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3"
            onClick={() => setIsOpen(false)}
          >
            <i className="mr-1 ri-movie-2-fill"></i> Movies
          </Link>

          <Link
            to="/tvshows"
            className="text-base font-semibold hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3"
            onClick={() => setIsOpen(false)}
          >
            <i className="mr-1 ri-slideshow-3-fill"></i> TV Shows
          </Link>

          <Link
            to="/peoples"
            className="text-base font-semibold hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3"
            onClick={() => setIsOpen(false)}
          >
            <i className="mr-1 ri-group-fill"></i> Peoples
          </Link>
        </nav>

        {/* Divider */}
        <hr className="border-none h-[1px] bg-zinc-400 my-4" />

        {/* Website Info Links */}
        <nav className="text-zinc-400 flex flex-col gap-3">
          <h1 className="text-white font-semibold text-lg mb-2">Website Info</h1>
          <Link
            to="/contactus"
            className="text-base font-semibold hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3"
            onClick={() => setIsOpen(false)}
          >
            <i className="mr-1 ri-phone-fill"></i> Contact Us
          </Link>
          <Link
            to="/aboutus"
            className="text-base font-semibold hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3"
            onClick={() => setIsOpen(false)}
          >
            <i className="mr-1 ri-information-2-fill"></i> About Us
          </Link>
        </nav>
      </div>

      {/* Overlay for Small Screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default SideNavbar;







































// import React from "react";
// import {Link} from 'react-router-dom'
// const SideNavbar = () => {
//   return (
//     <div className="fixed left-0 w-[17%] h-full bg-[#1F1E24] border-r-[1px] border-gray-700 py-10 px-8 ">

//       <div className="text-center text-2xl text-white font-bold flex flex-col">
//         <Link className="flex items-center justify-center gap-2" to={'/'}>
//           <img className="bg-white rounded w-10 h-10 object-contain" src="/logoImage.png" alt="" /> 
//           <h1 className="text-3xl">CAPSTAB</h1></Link>    
//       </div>
      
//       <nav className="text-zinc-400 flex flex-col gap-2 mt-2  ">
//         <h1 className="text-white font-semibold text-lg mt-2 mb-1">New Feeds</h1>

//         <Link to={"/trending"} className="text-base font-semibold hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3"><span><i class="mr-1 pr-1 text-base ri-fire-fill"></i></span>Trending</Link>

//         <Link to={"/popular"} className="text-base font-semibold hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3"><span><i class="mr-1 pr-1 text-base ri-numbers-fill"></i></span> Popular</Link>

//         <Link to={"/movies"} className="text-base font-semibold hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3"><span><i class="mr-1 pr-1 text-base ri-movie-2-fill"></i></span>Movies</Link>

//         <Link to={"/tvshows"} className="text-base font-semibold hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3"><span><i class="mr-1 pr-1 text-base ri-slideshow-3-fill"></i></span> TV Shows</Link>

//         <Link to={"/peoples"} className="text-base font-semibold hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3"><span><i class="mr-1 pr-1 text-base ri-group-fill"></i></span> Peoples</Link>

//       </nav>

//       <hr className="border-none h-[1px] bg-zinc-400 mt-2 " />

//       <nav className="text-zinc-400 flex flex-col gap-2 mt-1 ">
//         <h1 className="text-white font-semibold text-lg mt-3 mb-1">Website Info</h1>
//         <Link to={"/contactus"} className="text-base font-semibold hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3"><span><i class="mr-1 pr-1 text-base ri-phone-fill"></i></span>Contact Us</Link>
//         <Link to={"/aboutus"} className="text-base font-semibold hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3"><span><i class="mr-1 pr-1 text-base ri-information-2-fill"></i></span>About Us</Link>
//       </nav>

//     </div>
//   );
// };

// export default SideNavbar;

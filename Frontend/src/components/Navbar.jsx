import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, User, ShoppingCart, Menu } from "lucide-react"; // icons

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navbar flex items-center justify-between py-5 font-medium relative">

      {/* LOGO */}
      <div className="logo text-xl font-bold">
        Logo
      </div>

      {/* NAV LINKS */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collections" className="flex flex-col items-center gap-1">
          <p>Collections</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* RIGHT SIDE ICONS */}
      <div className="flex items-center gap-6 relative">

        {/* SEARCH ICON */}
        <Search className="w-5 h-5 cursor-pointer text-gray-700" />

        {/* PROFILE ICON */}
        <div className="relative">
          <User
            className="w-5 h-5 cursor-pointer text-gray-700"
            onClick={() => setOpenProfile(!openProfile)}
          />

          {/* DROPDOWN */}
          {openProfile && (
            <div className="absolute right-0 top-8 w-40 bg-white shadow-lg rounded-md text-sm">
              <NavLink
                to="/login"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Register
              </NavLink>
              <NavLink
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </NavLink>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
        <Link to="cart " className="relative">
          <ShoppingCart className="w-5 h-5 cursor-pointer text-gray-700 " />
          <p className="absolute right-[-5px] top-[-3px] w-4 text-center loading-4 bg-black text-white aspect-square rounded-full text-[8px] ">12</p>
        </Link>

        <Menu onClick={() => setOpenMenu(!openMenu)} className="w-5 cursor-pointer sm:hidden" />

        {/* DROPDOWN for small screen */}
        <div className={`absolute top-12 right-0 w-40 bg-white shadow-lg rounded-md text-sm sm:hidden transition-all duration-300 ${openMenu ? 'block' : 'hidden'}`}>
          <NavLink
            to="/"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setOpenMenu(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/collections"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setOpenMenu(false)}
          >
            Collections
          </NavLink>
          <NavLink
            to="/about"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setOpenMenu(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setOpenMenu(false)}
          >
            Contact
          </NavLink>
        </div>


      </div>
    </div>
  );
};

export default Navbar;

import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <nav className='container mx-auto flex items-center justify-between py-4 px-6 '>
      {/* left logo */}
      <div>
        <Link to="/" className='text-2xl font-medium'>
          E-Shop
        </Link>
      </div>

      {/* center navigation links */}
      <div className='hidden md:flex space-x-6 '>
        <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Men</Link>
        <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Women</Link>
        <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Top Wear</Link>
        <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Bottom wear</Link>
      </div>

      {/* right icons  */}
      <div className='flex items-center space-x-4'>
        <Link to="/profile" className='hover:text-balance'>
          <HiOutlineUser className='h-6 w-6 text-gray-700' />
        </Link>
        <button className='relative hover:text-balance'>
          <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
          <span className='absolute -top-1 -right-2 bg-orange-600 text-white text-xs  rounded-full px-2 py-0.5 '>0</span>
        </button>
        {/* search */}
        <div className='overflow-hidden'>
          <SearchBar />
        </div>

        <button>
          <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
        </button>
      </div>





    </nav>
  )
}

export default Navbar
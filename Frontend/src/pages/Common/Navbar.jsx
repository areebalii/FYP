import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
import { useState } from 'react'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }
  return (
    <>
      <nav className='container mx-auto flex items-center justify-between py-4 px-6 '>
        {/* left logo */}
        <div>
          <Link to="/" className='text-2xl font-medium'>
            E-Shop
          </Link>
        </div>

        {/* center navigation links */}
        <div className='hidden md:flex space-x-6 '>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase cursor-pointer'>Men</Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase cursor-pointer'>Women</Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase cursor-pointer'>Top Wear</Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase cursor-pointer'>Bottom wear</Link>
        </div>

        {/* right icons  */}
        <div className='flex items-center space-x-4'>
          <Link to="/profile" className='hover:text-balance'>
            <HiOutlineUser className='h-6 w-6 text-gray-700 cursor-pointer' />
          </Link>
          <button onClick={toggleCartDrawer} className='relative hover:text-balance cursor-pointer'>
            <HiOutlineShoppingBag className='h-6 w-6 text-gray-700 cursor-pointer' />
            <span className='absolute -top-1 -right-2 bg-orange-600 text-white text-xs  rounded-full px-2 py-0.5 '>0</span>
          </button>
          {/* search */}
          <div className='overflow-hidden'>
            <SearchBar />
          </div>

          <button className='md:hidden'>
            <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
          </button>
        </div>

      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

    </>
  )
}

export default Navbar
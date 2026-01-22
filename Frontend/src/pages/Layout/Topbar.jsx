import React from 'react'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io5'
import { RiTwitterXLine } from 'react-icons/ri'

const Topbar = () => {
  return (
    <div className='bg-gray-950 text-white'>
      <div className='container mx-auto flex justify-between items-center py-3 px-4'>
        <div className='hidden md:flex items-center gap-4'>
          <a href="#" className='hover:text-gray-300'>
            <TbBrandMeta className='h-5 w-5' />
          </a>
          <a href="#" className='hover:text-gray-300'>
            <IoLogoInstagram className='h-5 w-5' />
          </a>
          <a href="#" className='hover:text-gray-300'>
            <RiTwitterXLine className='h-5 w-5' />
          </a>
        </div>
        <div className='text-sm text-center flex-grow'>
          <span>we ship world wide - fast and reliable shipping</span>
        </div>
        <div className='hidden md:block text-sm'>
          <span>Email: LzYQs@example.com</span>
        </div>
      </div>
    </div>
  )
}

export default Topbar
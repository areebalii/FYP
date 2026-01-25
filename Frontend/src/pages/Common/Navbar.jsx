import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='container mx-auto flex items-center justify-center py-4 px-6 '>
    {/* left logo */}
    <div>
      <Link to="/" className='text-2xl font-medium' />
    </div>

    </nav>
  )
}

export default Navbar
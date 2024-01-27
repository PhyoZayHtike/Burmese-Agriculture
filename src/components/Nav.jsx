import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-green-500 p-3 sm:px-0 md:px-20'>
        <Link to={'/'}>
        <div className='flex items-center'>
        <img className='w-10 md:w-16' src="/public/logo.png" alt="" />
        <h3 className='ml-2 font-medium text-xl md:text-3xl text-white'>Burmese Agriculture</h3>
        </div>
        </Link>
    </div>
  )
}

export default Nav
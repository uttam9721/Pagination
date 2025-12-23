import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-2'>
      <div>
        <img className='w-22' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRM4Hr5gaVBHjpxsavpLq61pevt0G1MJBR_sunGJo2oqaL7atO" alt="" />
      </div>
      {/* <div></div> */}
      <div>
        <Link to={'/login'}>
        <button className='cursor-pointer bg-amber-500 text-white px-5 py-1 border border-[#ccc] rounded'>Logout</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar

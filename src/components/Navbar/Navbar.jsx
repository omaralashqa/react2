import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [display, setdisplay] = useState(false)
  function changedisplay() {
    if (display) {
      setdisplay(false)
    } else {
      setdisplay(true)
    }
  }
  return <>
    <nav className='bg-[#2C3E50] text-white py-8 fixed top-0 left-0 right-0 z-50  ' >
      <div className="container w-11/12  md:w-10/12 mx-auto">
        <div className="flex justify-between items-center">
          <Link to={"/"}><h2 className='text-3xl font-bold uppercase'>Start Framework
          </h2></Link>
          <div className="list hidden lg:flex">
            <ul className='flex gap-10 uppercase text-lg font-semibold'>
              <li>
                <NavLink   to={"about"}>about</NavLink>
              </li>
              <li>
                <NavLink  to={"portfolio"}>portfolio</NavLink>
              </li>
              <li>
                <NavLink   to={"contact"}> contact</NavLink>
              </li>
            </ul>
          </div>
          <div onClick={changedisplay} className=" flex lg:hidden listicon cursor-pointer border-2 rounded-2xl p-3 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-600 ease-in-out ${display ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'
            }`}
        >
          {display == true ? <ul className=' lg:hidden   space-y-6 mt-3 uppercase text-lg font-semibold'>
            <li>
              <NavLink onClick={()=>setdisplay(false)} to={"about"}>about</NavLink>
            </li>
            <li>
              <NavLink onClick={()=>setdisplay(false)} to={"portfolio"}>portfolio</NavLink>
            </li>
            <li>
              <NavLink onClick={()=>setdisplay(false)} to={"contact"}> contact</NavLink>
            </li>
          </ul> : ""}
        </div>


      </div>
    </nav>





  </>

}

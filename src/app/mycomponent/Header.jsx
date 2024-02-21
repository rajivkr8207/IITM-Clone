"use client"
import Link from 'next/link';
import React, {useState } from 'react'

const Header = () => {
   const [showmedia, setshowmedia] = useState(false);
  return (
    <> 
            <nav className='flex justify-between place-items-center p-5  ' id='Nav_bar'>
                <div><img src="./iitm.png" alt="picture is mising"  id='iitm_logo'/></div>

               <div>
               <div className='  hidden sm:flex md:flex' id='sign_out_top'>
                    <h1 className='text-red-700 font-medium mr-4'> xyz@ds.study.iitm.ac.in</h1>
                    <button className='' id='sign_out'>SIGN OUT</button>    
                </div>
                <div>
                     <a href="" onClick={() => setshowmedia(!setshowmedia)}><img src="./menu.png" className='w-14' id='main_header_menu' alt="" /></a> 
                </div>
               </div>
            </nav>




{/* mobile version */}
            <header className={showmedia ?  "mobile_Navbar":"mobile_Navbar"}>
          <div className='flex justify-between place-items-center'>
            <img src="./iitm.png" className='w-40' alt="img claose"  />
            <img src="./close.png" className='w-8 m-5'  alt="img close" />
          </div>

        <h2 className='text-center text-gray-500 font-medium'>MY DASHBOARD</h2>

<ul className='my-5'>
    <li className='my-4'><Link className='text-gray-500' href="/">- Latest Updates</Link></li>
    <li className='my-4'><Link className='text-gray-500' href="/">- Course Registration <span id='sidenav_Course'>Document to be Verified</span></Link></li>
    <li className='my-4'><Link className='text-gray-500' href="/Hall">- Exam Cites and Hall Tickets</Link></li>
    <li className='my-4'><Link className='text-gray-500' href="/Courses">- My Current Courses</Link></li>
    <li className='my-4'><Link className='text-gray-500' href="/Calender">- Academic Calender</Link></li>
    <li className='my-4'><Link className='text-gray-500' href="/DocumentDl">- Documents For Download</Link></li>
    <li className='my-4'><Link className='text-gray-500' href="/Certificates">- Certificates</Link></li>
    <li className='my-4'><Link className='text-gray-500' href="/Action">- Disciplanary Action</Link></li>
    <li className='my-4'><Link className='text-gray-500' href="/SubmitDoc">- Submitted Documents</Link></li>
    <li className='my-4'><Link className='text-gray-500' href="/Payment">- Pending Payments</Link></li>
</ul>

<div className=' flex flex-col'>
                    <h1 className= ' text-sm text-red-700 font-medium mr-4'> xyz@ds.study.iitm.ac.in</h1>
                    <button className='w-24 my-2' id='sign_out'>SIGN OUT</button>    
                </div>
        </header>
    </>
  )
}

export default Header

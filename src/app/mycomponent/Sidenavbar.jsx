import React from 'react'
import Link from 'next/link'
const Sidenavbar = () => {
  return (
    <>
      <nav className='pt-10 pl-8 mt-1 hidden md:flex sm:flex flex-col justify-evenly' id="side_navbar">
        <h2 className='text-base text-gray-500 font-medium'>MY DASHBOARD</h2>

        <ul>
            <li><Link href="/">- Latest Updates</Link></li>
            <li><Link href="/">- Course Registration <span id='sidenav_Course'>Document to be Verified</span></Link></li>
            <li><Link href="/Hall">- Exam Cites and Hall Tickets</Link></li>
            <li><Link href="/Courses">- My Current Courses</Link></li>
            <li><Link href="/Calender">- Academic Calender</Link></li>
            <li><Link href="/DocumentDl">- Documents For Download</Link></li>
            <li><Link href="/Certificates">- Certificates</Link></li>
            <li><Link href="/Action">- Disciplanary Action</Link></li>
            <li><Link href="/SubmitDoc">- Submitted Documents</Link></li>
            <li><Link href="/Payment">- Pending Payments</Link></li>
        </ul>

        <p id='sidenav_report'>Reporting harassment: IITM BS Degree Team is committed to ensuring that </p>
      </nav>
    </>
  )
}

export default Sidenavbar

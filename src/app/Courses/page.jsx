import Link from 'next/link'
import React from 'react'

const Courses = () => {
  return (
    <div id='my_course'>

      <div className='text-right mr-8'>
        <h1 className='text-2xl font-medium'>21 September, 2023</h1>
      <h1 className='text-1xl font-medium' >QUALIFIER</h1>
      </div>

    <h1 className='text-2xl font-medium my-4 mb-4'>My Current Course</h1>
      <div id='course_sub__flex'>
        <div className='ml-9 my-3' id='course_sub'>
          <div className='flex align-bottom justify-start h-36 text-white text-2xl pt-5 pl-4 pr-2'>Statistics for Data Science I</div>
          <div className='h-9 course_center'></div>
          <div className='w-full bg-white py-3 border border-gray-800 '><Link className='text-red-600 bg-white w-full flex justify-end pr-2 text-sm font-medium' target='targer' href="https://seek.onlinedegree.iitm.ac.in/courses/ns_23t3_ma1002">Go to Course Page </Link></div>
        </div>
        
        <div className='ml-9 my-3' id='course_sub'>
          <div className='flex align-bottom justify-start h-36 text-white text-2xl pt-5 pl-4'>Mathametic For Data Science I</div>
          <div className='h-9 course_center'></div>
          <div className='w-full bg-white py-3 border border-gray-800 '><Link className='text-red-600 bg-white w-full flex justify-end pr-2 text-sm font-medium' target='targer' href="https://seek.onlinedegree.iitm.ac.in/courses/ns_23t3_ma1001">Go to Course Page </Link></div>
        </div>

        <div className='ml-9 my-3 mb-5' id='course_sub'>
          <div className='flex align-bottom justify-start h-36 text-white text-2xl pt-5 pl-4'>English I</div>
          <div className='h-9 course_center'></div>
          <div className='w-full bg-white py-3 border border-gray-800 '><Link className='text-red-600 bg-white w-full flex justify-end pr-2 text-sm font-medium' target='targer' href="https://seek.onlinedegree.iitm.ac.in/courses/ns_23t3_hs1001">Go to Course Page </Link></div>
        </div>


      </div>


    </div>
  )
}

export default Courses

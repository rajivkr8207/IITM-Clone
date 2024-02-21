import React from 'react'

const Hall = () => {
  return (
    <>
      <h1 className='text-left text-3xl font-medium'>Hall Tickets for Download </h1>
      <h1 className='text-gray-600 my-3'>Your upcoming exam hall tickets will appear here. </h1>
      <br />
      <h1 className='text-left text-3xl font-medium'>Exam City Preferences </h1>
      <hr className='my-3'/>
      <div className='font-bold flex justify-evenly'>
      <h1>Exam name</h1>
      <h1>Dates</h1>
      <h1>Preference 1</h1>
      <h1>Preference 2</h1>
      <h1>Last Date to Edit Preference</h1>
      </div>
      <hr className='my-3'/>

      <button id='Hall_btn'>EDIT EXAM CITY PREFERENCES </button>

      <h1 className='text-red-600 italic mb-40'>Note: Only learners with exam city preferences within India will be allowed to edit their preferences from the dashboard. If you have <br />selected even one exam city preference outside India, you will need to write to <span>support@study.iitm.ac.in</span> to make any edits.</h1>


    </>
  )
}

export default Hall

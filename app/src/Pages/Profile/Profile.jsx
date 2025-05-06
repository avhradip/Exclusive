import React from 'react'
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const navigate = useNavigate()


  return (
    <div className='px-5 py-10 md:px-20'>
      <div>
        <p className='text-red-600 text-2xl mb-5'>Edit Your Profile</p>
        <div className='flex flex-1 flex-col gap-5'>
          <input type="text" placeholder='First Name' className='bg-gray-200 px-10 py-4 rounded-[4px] outline-0' />
          <input type="text" placeholder='Last Name' className='bg-gray-200 px-10 py-4 rounded-[4px] outline-0' />
          <input type='email' placeholder='Email' className='bg-gray-200 px-10 py-4 rounded-[4px] outline-0' />
          <input type="text" placeholder='Address' className='bg-gray-200 px-10 py-4 rounded-[4px] outline-0' />
        </div>
      </div>
      <div>
        <p className='text-red-600 text-2xl mt-5 mb-5'>Password Changes</p>
        <div className='flex flex-1 flex-col gap-5'>
          <input type="password" placeholder='Current Password' className='bg-gray-200 px-10 py-4 rounded-[4px] outline-0' />
          <input type="password" placeholder='Password' className='bg-gray-200 px-10 py-4 rounded-[4px] outline-0' />
          <input type="password" placeholder='Re enter Password' className='bg-gray-200 px-10 py-4 rounded-[4px] outline-0' />
        </div>
      </div>
      <div className='flex flex-row flex-wrap justify-center md:justify-end gap-10 mt-10'>
        <button className='border-1 border-blue-100 px-17 py-3 rounded-[4px] hover:bg-blue-300' onClick={() => navigate('/')}>Cancel</button>
        <button className='bg-[#DB4444] px-12 py-3 rounded-[4px]' onClick={() => navigate('/')}>Save Changes</button>
      </div>
    </div>
  )
}

export default Profile
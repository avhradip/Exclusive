import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#000000] text-[#fff] max-w-full min-h-10 flex justify-center'>
      <div className='flex items-center gap-16'>
        <p className='font-normal text-[10px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <b className='underline'>ShopNow</b></p>
        <select className=" outline-0 text-xs border-0 p-2 rounded-md bg-[#000] text-[#fff]">
          <option className='text-xs p-1' value="English">English</option>
          <option className='text-xs p-1' value="Hindi">Hindi</option>
          <option className='text-xs p-1' value="Spanish">Spanish</option>
          <option className='text-xs p-1' value="French">French</option>
          <option className='text-xs p-1' value="German">German</option>
          <option className='text-xs p-1' value="Chinese">Chinese</option>
        </select>
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import { RiSearchLine } from "react-icons/ri";


const Search = () => {
    return (
        <div className='flex justify-center pt-4 md:hidden'>
            <div className="flex bg-gray-100 w-[80%] h-10 items-center px-2 rounded-md ">
                <input type="text" placeholder="What are you looking for?" className="flex-1 bg-transparent text-sm outline-none px-2" />
                <button><RiSearchLine /></button>
            </div>
        </div>
    )
}

export default Search
import React from 'react';
import img from '/p.png';
import "swiper/css/pagination";
import Categoriescard from './Categoriescard';
import { CiMobile3 } from "react-icons/ci";
import { GiGemPendant } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { IoWomanSharp } from "react-icons/io5";

const Categories = () => {
  const data = [
    { id: 1, name: "electronics", img: <CiMobile3 /> },
    { id: 2, name: "jewelery", img: <GiGemPendant /> },
    { id: 3, name: "men's clothing", img: <GiClothes /> },
    { id: 4, name: "women's clothing", img: <IoWomanSharp /> }
  ];

  return (
    <div className='py-20'>
      <div className=''>
        <div className='flex items-center gap-4 font-semibold text-[#DB4444]'>
          <img src={img} alt="Category Icon" />
          <p>Categories</p>
        </div>
        <div className='text-3xl font-semibold pr-5'>
          <p>Browse By Category</p>
        </div>
      </div>
      <div className='flex gap-20 justify-around overflow-x-scroll example'>
          {data.map((item) => (
              <Categoriescard item={item} key={item.id} />
          ))}

      </div>
      <hr className='text-[#8e8c8c] mt-10' />
    </div>
  );
};

export default React.memo(Categories);

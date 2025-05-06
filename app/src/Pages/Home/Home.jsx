import React, { useContext } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import Swiper from './Swiper/Swiper';
import Sales from './Sales/Sales';
import Categories from './Categories/Categories';
import Promise from '../../Components/Promise/Promise';
import Bestselling from './Bestselling/Bestselling';
import Adds from './Adds/Adds';
import Ourproducts from './Ourproducts/Ourproducts';
import New from './New/New';

const Home = () => {
  
  const data = ["Women's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby & Toys", "Groceries & Pets", "Health & Beauty",]
  return (
    <div className="w-full">
      <div className="relative flex flex-1 flex-wrap md:flex-row py-10 px-5 lg:mx-20 md:mx-5">

        <div className="w-full md:w-1/4 lg:w-1/5 p-4 rounded-lg">
          {data.map((category, index) => (
            <div key={index} className="flex items-center justify-between w-full py-2">
              <p className="text-gray-700 text-sm md:text-base">{category}</p>
              {index < 2 && <MdArrowForwardIos className="text-gray-500 text-xs" />}
            </div>
          ))}
        </div>



        <div className="w-full md:w-3/4 lg:w-4/5 rounded-lg overflow-hidden">
          <Swiper />
        </div>
      </div>


      <div className="py-10 px-5 lg:mx-20 md:mx-5">
        <Sales />
        <Categories />
        <Bestselling />
        <Adds />
        <Ourproducts />
        <New />
        <Promise />
      </div>
    </div>
  );
};

export default Home;

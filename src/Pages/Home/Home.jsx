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
import { CardData } from '../../App';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { data } from '../../constants/constants';

const Home = () => {
  const navigate = useNavigate()
  const { showCategorie } = useContext(CardData)

  return (
    <div className="w-full">
      <div className="relative flex flex-1 flex-wrap md:flex-row items-center py-10 px-5 lg:mx-20 md:mx-5">

        <div className="w-full h-fit md:w-1/4 lg:w-1/5 p-4 rounded-lg bg-white shadow-sm">
          {data.map((item) => (
            <div
              key={item?.id}
              className="cursor-pointer p-3 rounded-md hover:bg-gray-100 transition"
              onClick={() => {
                console.log(item);
                showCategorie(item);
                navigate('/categoriebyproduct');
              }}
            >
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium truncate">{item?.name}</p>
                <IoIosArrowForward className="text-gray-500" />
              </div>
              <hr className="opacity-20 mt-2" />
            </div>
          ))}
        </div>





        <div className="w-full md:w-3/4 lg:w-4/5 rounded-lg overflow-hidden z-0">
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

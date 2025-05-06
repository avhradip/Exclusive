import React from 'react';
import a_img from '/A-img.png';
import icon1 from '/icon1.png';
import icon2 from '/icon2.png';
import icon3 from '/icon3.png';
import icon4 from '/icon4.png';
import c1 from '/c1.png';
import c2 from '/c2.png';
import c3 from '/c3.png';
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Promise from '../../Components/Promise/Promise';

const About = () => {
  const data =[c1, c2, c3]
  return (
    <div>
      <div className='flex flex-wrap gap-4 py-10 px-6 md:mx-20'>
        <div className='w-full md:w-[40%]'>
          <p className='text-3xl font-bold mb-10'>Our Story</p>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
            Exclusive has more than 1 Million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
          </p>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <img src={a_img} alt="" className='w-full max-w-md' />
        </div>
      </div>

      <div className='flex flex-1 flex-wrap gap-5 justify-evenly py-10'>
        <div className='flex flex-col justify-center rounded-[4px] items-center border-1 hover:bg-[#DB4444] hover:text-[#fff] w-55 h-50'>
          <img src={icon1} alt="icon" />
          <p className='text-2xl font-bold'>10.5k </p>
          <p>Sallers active our site</p>
        </div>
        <div className='flex flex-col justify-center rounded-[4px] items-center border-1 hover:bg-[#DB4444] hover:text-[#fff] w-55 h-50'>
          <img src={icon2} alt="icon" className='bg-black rounded-full' />
          <p className='text-2xl font-bold'>10.5k </p>
          <p>Sallers active our site</p>
        </div>
        <div className='flex flex-col justify-center rounded-[4px] items-center border-1 hover:bg-[#DB4444] hover:text-[#fff] w-55 h-50'>
          <img src={icon3} alt="icon" />
          <p className='text-2xl font-bold'>10.5k </p>
          <p>Sallers active our site</p>
        </div>
        <div className='flex flex-col justify-center rounded-[4px] items-center border-1 hover:bg-[#DB4444] hover:text-[#fff] w-55 h-50'>
          <img src={icon4} alt="icon" />
          <p className='text-2xl font-bold'>10.5k </p>
          <p>Sallers active our site</p>
        </div>
      </div>

      <div className='flex gap-10 md:gap-20 justify-start md:justify-around overflow-x-auto py-10 px-6 md:px-20 example'>
        {data.map((img, index) => (
          <div key={index} className='min-w-[200px] md:min-w-0 flex flex-col gap-2'>
            <img src={img} alt="team member" className='w-full max-w-xs' />
            <p className='text-2xl font-semibold'>Tom Cruise</p>
            <p>Founder & Chairman</p>
            <div className='flex gap-2 '>
              <CiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        ))}
      </div>

      <Promise />
    </div>
  );
};

export default About;

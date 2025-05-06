import React from 'react'
import { LuSendHorizontal } from "react-icons/lu";
import Qr from '/qr.png'
import play from '/googleplay.png'
import ios from '/ios.png'
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className=' bg-[#000] text-[#fff] flex flex-wrap justify-center gap-10 md:justify-around px-10 py-10'>
                <div className='flex flex-col gap-4 w-48 items-center md:items-start'>
                    <div className='flex flex-col items-center md:items-start w-64 md:w-auto'>
                        <p>Exclusive</p>
                        <p>Subscribe</p>
                        <p>Get 10% off your first order</p>
                    </div>
                    <div className='border-1 flex flex-row justify-evenly items-center rounded-[3px] h-10 w-55'>
                        <input type="text" placeholder='Enter your email' className='border-0 outline-0' />
                        <button><LuSendHorizontal /></button>
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-48 items-center md:items-start'>
                    <p>Support</p>
                    <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className='flex flex-col gap-4 w-48 md:w-28 items-center md:items-start'>
                    <p>Account</p>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className='flex flex-col gap-4 w-48 items-center md:items-start'>
                    <p>Quick Link</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className='flex flex-col gap-4 w-48 items-center md:items-start'>
                    <div className='flex flex-col items-center md:items-start w-64 md:w-auto'>
                        <p>Download App</p>
                        <p>Save $3 with App New User Only</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div>
                            <img src={Qr} alt="" width={70} />
                        </div>
                        <div className='flex flex-col gap-2 items-center md:items-start'>
                            <img src={play} alt="" width={100} />
                            <img src={ios} alt="" width={100} />
                        </div>
                    </div>
                    <div className='flex gap-2 '>
                        <p><RiFacebookLine /></p>
                        <p><CiTwitter /></p>
                        <p><FaInstagram /></p>
                        <p><FaLinkedinIn /></p>
                    </div>
                </div>
            </div>
            <div className='flex text-[12px] justify-center bg-[#000] text-[#555]'>
                <p>&copy;Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    )
}

export default Footer
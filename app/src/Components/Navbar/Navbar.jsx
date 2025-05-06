import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { RiSearchLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline, IoStarOutline } from "react-icons/io5";
import { LuUser, LuShoppingBag } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import { CardData } from "../../App";

const Navbar = () => {
    const { itemCount, totalWishlist, search, setSearch,setSearchFun } = useContext(CardData)
    const navigate = useNavigate();
    const [option, setOption] = useState(false);
    const [menu, setMenu] = useState(false);
    // console.log('n',search);
    


    const signUpFun = () => {
        navigate("/signup");
    };

    return (
        <div className="max-w-7xl mx-auto xs:px-5">
            <div className="flex justify-between items-center px-2 py-4">
                <div>
                    <h1 className="font-bold text-3xl">Exclusive</h1>
                </div>

                <div className="hidden lg:block">
                    <nav className="flex gap-8">
                        <Link to="/" className="hover:text-red-500">Home</Link>
                        <Link to="/contact" className="hover:text-red-500">Contact</Link>
                        <Link to="/about" className="hover:text-red-500">About</Link>
                        <Link to="/signup" className="hover:text-red-500">Sign Up</Link>
                    </nav>
                </div>

                <div className="flex justify-around items-center">

                    <div className="hidden md:flex bg-gray-100 w-72 h-10 items-center px-2 rounded-md">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="flex-1 bg-transparent text-sm outline-none px-2"
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                        />
                        <button><RiSearchLine /></button>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/wishlist" className="text-2xl relative"><p className="absolute text-[13px] bottom-4 left-3 bg-red-600 opacity-60 text-[#fff] px-1.5 rounded-full">{totalWishlist}</p><CiHeart /></Link>
                        <Link to="/cart" className="text-2xl relative"><p className="text-[13px] absolute bottom-4 left-3 bg-red-600 opacity-60 text-[#fff] px-1.5 rounded-full">{itemCount}</p><IoCartOutline /></Link>


                        <div className="relative"  onMouseEnter={() => setOption(true)} onMouseLeave={() => setOption(false)}>
                            <div className="text-2xl hover:bg-red-500 p-2 rounded-full">
                                <LuUser />
                            </div>

                            {option && (
                                <div className="absolute top-8 right-0 mt-2 text-[#949292] backdrop-blur-2xl shadow-md rounded-md p-2 w-60 z-10">
                                    <ul>
                                        <li className="p-2 cursor-pointer flex items-center gap-4" onClick={() => navigate('/profile')}>
                                            <LuUser />
                                            <Link to="/profile">Manage My Account</Link>
                                        </li>
                                        <li className="p-2 cursor-pointer flex items-center gap-4" onClick={() => navigate('/order')}>
                                            <LuShoppingBag />
                                            <Link to="/order">My Order</Link>
                                        </li>
                                        <li className="p-2 cursor-pointer flex items-center gap-4" onClick={() => navigate('/cancellations')}>
                                            <GiCancel />
                                            <Link to="/cancellations">My Cancellations</Link>
                                        </li>
                                        <li className="p-2 cursor-pointer flex items-center gap-4" onClick={() => navigate('/reviews')}>
                                            <IoStarOutline />
                                            <Link to="/reviews">My Reviews</Link>
                                        </li>
                                        <button className="p-2 w-full text-left flex items-center gap-4" onClick={signUpFun}>
                                            <TbLogout2 />
                                            Logout
                                        </button>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                <div className="lg:hidden block relative">
                    <button className="text-3xl" onClick={() => setMenu(!menu)}>
                        {menu ? <GiCancel /> : <GiHamburgerMenu />}
                    </button>

                    {menu && (
                        <div className="absolute right-0 top-12 bg-white shadow-lg w-44 rounded-md p-4 z-20 flex flex-col gap-4">
                            <Link to="/" className="hover:text-red-500" onClick={() => setMenu(!menu)}>Home</Link>
                            <Link to="/contact" className="hover:text-red-500" onClick={() => setMenu(!menu)}>Contact</Link>
                            <Link to="/about" className="hover:text-red-500" onClick={() => setMenu(!menu)}>About</Link>
                            <Link to="/signup" className="hover:text-red-500" onClick={() => setMenu(!menu)}>Sign Up</Link>
                        </div>
                    )}
                </div>
            </div>

            <hr className="border-gray-200" />
        </div>
    );
};

export default Navbar;

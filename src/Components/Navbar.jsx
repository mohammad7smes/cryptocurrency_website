import { useState } from "react"
import logo from "../assets/images/logo.svg"
import menu from "../assets/images/menu.png"
import search from "../assets/images/search.png"

import { NFT, topNavPrices, products, learn } from "../constant"
import { cryptoes } from "../constant"
import { excahnge } from "../constant"

import { Slider } from "./slider"

const Navbar = () => {
    const [showmenu, setShowMenu] = useState(true);
    return (
        <>
            <nav className="bg-eerieBlack_2 text-white py-1 backdrop-blur flex flex-col justify-between md:hidden">
                <div className="flex flex-row justify-between">
                    <a href="#" className="flex">
                        <img src={logo} alt="Logo" className="w-[40px]" />
                        <span className="pt-4 mx-1">کریپتکس</span>
                    </a>


                    <div className="py-2 px-3">
                        <button type="button" className="md:hidden px-2 focus:bg-gray-700 hover:bg-gray-800">
                            <img src={search} alt="search-icon" className="w-[32px] " />
                        </button>
                        <button type="button" className="md:hidden px-2 focus:bg-gray-700 hover:bg-gray-800" onClick={() => setShowMenu(!showmenu)}>
                            <img src={menu} alt="menu-bars" className="w-[32px] " />
                        </button>

                    </div>
                </div>

                <div className="w-[207%] px-2 flex flex-nowrap " >
                    {topNavPrices.map((item, index) => (

                        <span key={index}>
                            <span className="text-gray-400 text-xs sm:text-sm">{item.title}</span>
                            <span className=" text-blue-500 cursor-pointer hover:text-blue-300 mx-1 text-xs text-[10px] sm:text-sm"> {item.total} </span>
                        </span>

                    ))}
                </div>

                <div className={`${showmenu ? "hidden" : "block"} px-2 absolute top-0 w-[100%] bg-eerieBlack_1 h-[100vh]`}>
                    <header className="flex justify-between">
                        <a href="#" className="flex">
                            <img src={logo} alt="Logo" className="w-[40px]" />
                            <span className="pt-3 mx-1">کریپتکس</span>
                        </a>
                        <button type="button" className={` ${showmenu ? "hidden" : "block"} text-[22px] hover:text-red-600`} onClick={() => setShowMenu(!showmenu)}>
                            &times;
                        </button>
                    </header>

                    <main>
                        <div className="menus py-4 mx-10 flex flex-col  w-[100%]">
                            <a href="#" className="text-[23px] hover:text-blue-500 hover:shadow-lg relative my-3">رمز ارزها </a>

                            <a href="#" className="text-[23px] hover:text-blue-500 hover:shadow-lg my-3"> معامله </a>
                            <a href="#" className="text-[23px] hover:text-blue-500 hover:shadow-lg my-3"> جامعه </a>
                            <a href="#" className="text-[23px] hover:text-blue-500 hover:shadow-lg my-3"> محصولات </a>
                            <a href="#" className="text-[23px] hover:text-blue-500 hover:shadow-lg my-3"> یادگیری </a>
                        </div>

                        <div className=" py-4 mx-10 flex flex-col w-[100%]">
                            <a href="#" className=" text-[23px] hover:bg-gray-800 p-1 rounded-md hover:shadow-lg"> لیست </a>
                            <a href="#" className=" text-[23px] hover:bg-gray-800 p-1 rounded-md hover:shadow-lg"> شخصی </a>

                        </div>
                    </main>

                    <footer className="flex flex-col">
                        <div className="flex flex-col">
                            <button type="button" className=" py-3 bg-blue-700 text-white p-1 rounded-md hover:bg-blue-800 my-2">
                                ثبت نام
                            </button>
                            <button type="button" className="border py-3  border-blue-600 p-1 px-2 rounded-md text-blue-600 hover:bg-gray-800">
                                ورود
                            </button>
                        </div>
                        <div className="my-3 flex justify-evenly">

                            <button type="button" className=" rounded-md bg-gray-800 w-[45%] py-3 font-poppins hover:bg-gray-900 hover:border hover:border-green-900">
                                FA
                            </button>
                            <button type="button" className=" rounded-md bg-gray-800 w-[45%] py-3 font-poppins hover:bg-gray-900 hover:border hover:border-green-900">
                                USD
                            </button>
                        </div>
                    </footer>
                </div>
            </nav>


            {/* Navbar on lg screen */}

            <nav className="hidden md:block bg-eerieBlack_2 text-white py-0 backdrop-blur flex justify-between">
                <div className="border-b border-gray-500 flex justify-start py-2">
                    <div className="w-[80%] px-2 flex" >
                        {topNavPrices.map((item, index) => (

                            <div key={index}>
                                <span className="text-gray-400 mx-1">{item.title}</span>
                                <span className="text-sm text-blue-500 cursor-pointer hover:text-blue-300 mx-3"> {item.total} </span>
                            </div>

                        ))}
                    </div>

                    <div className="w-[7%] flex justify-around">
                        <button type="button" className="font-poppins">FA</button>
                        <button type="button" className="font-poppins">USD</button>
                    </div>

                    <div className="w-[13%] border-r border-gray-500 flex justify-evenly">
                        <button type="button" className="border border-blue-600 p-1 px-2 rounded-md text-blue-600 hover:bg-gray-800">
                            ورود
                        </button>
                        <button type="button" className="bg-blue-700 text-white p-1 rounded-md hover:bg-blue-800">
                            ثبت نام
                        </button>

                    </div>
                </div>


                <div className=" py-2 px-3 flex">
                    <div className="logo w-[15%]">
                        <a href="#" className="flex">
                            <img src={logo} alt="Logo" className="w-[40px] pt-2" />
                            <span className="pt-2 mx-1 text-[22px]">کریپتکس</span>
                        </a>
                    </div>

                    <div className="menus py-4 mx-10 flex justify-evenly w-[55%] relative">
                        <div>
                            <a href="#" className="hover:text-blue-500 hover:shadow-lg relative cryptoes">رمز ارزها
                            </a>
                            <div className="bg-eerieBlack_2 absolute top-10 rounded-lg cryptoesLinks">
                                {
                                    cryptoes.map((item, index) => {
                                        return (
                                            <a href="#" className="block my-2 p-2 w-[100%] px-4 hover:text-blue-500">{item.title}</a>
                                        )
                                    })
                                }
                            </div>


                        </div>
                        <div>
                            <a href="#" className="hover:text-blue-500 hover:shadow-lg excahnge"> معامله </a>

                            <div className="bg-eerieBlack_2 absolute top-10 rounded-lg excahngeLinks">
                                {
                                    excahnge.map((item, index) => {
                                        return (
                                            <a href="#" className="block my-2 p-2 w-[100%] px-4 hover:text-blue-500">{item.title}</a>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div>
                            <a href="#" className="hover:text-blue-500 hover:shadow-lg font-poppins NFT"> NFT </a>
                            <div className="bg-eerieBlack_2 absolute top-10 rounded-lg NFTLinks">
                                {
                                    NFT.map((item, index) => {
                                        return (
                                            <a href="#" className="block my-2 p-2 w-[100%] px-4 hover:text-blue-500 font-poppins">{item.title}</a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <a href="#" className="hover:text-blue-500 hover:shadow-lg products"> محصولات </a>
                            <div className="bg-eerieBlack_2 absolute top-10 rounded-lg productsLinks">
                                {
                                    products.map((item, index) => {
                                        return (
                                            <a href="#" className="block my-2 p-2 w-[100%] px-4 hover:text-blue-500 font-poppins">{item.title}</a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                       <div>
                       <a href="#" className="hover:text-blue-500 hover:shadow-lg learn"> یادگیری </a>
                        <div className="bg-eerieBlack_2 absolute top-10 rounded-lg learnLinks">
                                {
                                    learn.map((item, index) => {
                                        return (
                                            <a href="#" className="block my-2 p-2 w-[100%] px-4 hover:text-blue-500 font-poppins">{item.title}</a>
                                        )
                                    })
                                }
                            </div>
                       </div>
                    </div>

                    <div className="w-[30%] py-4 mx-10 flex justify-evenly">
                        <a href="#" className=" hover:bg-gray-800 p-1 rounded-md hover:shadow-lg"> لیست </a>
                        <a href="#" className=" hover:bg-gray-800 p-1 rounded-md hover:shadow-lg"> شخصی </a>
                        <input type="search"
                            className="bg-gray-700 outline-none w-[60%] px-2"
                            placeholder="جستجو" />
                    </div>

                </div>
            </nav>


        </>
    )
}

export default Navbar;
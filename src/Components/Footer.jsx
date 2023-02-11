import logo from "../assets/images/logo.svg"

import { footerItems } from "../constant";

const Footer = () => (
    <footer className="bg-eerieBlack_1 text-white py-10">
        <div className="bg-eerieBlack_1 text-white flex flex-col md:flex-row md:justify-evenly py-10">
            <div>
                <div className="flex">
                    <img src={logo} alt="" className="w-[80px]" />
                    <h1 className="text-3xl my-10">کریپتکس</h1>
                </div>
                <h2 className="text-2xl my-5">در تماس باش با ما!</h2>
                <h1 className="text-xl ml-10 text-gray-400" dir="ltr">+98 914 202 4879</h1>
                <h1 className="text-md ml-10 text-gray-400 font-poppins my-5" dir="ltr">mesmilzadeh@gmail.com</h1>
                <h1 className="text-md  text-gray-400 font-poppins my-5 text-justify">تهران، خیابان تجریش <br /> ساختمان 7، پلاک 5، اتاق مهندس اسمعیلزاده</h1>
            </div>


            {footerItems.map((footerLink) => (

                <ul className="mt-10 mr-4 md:mr-0">
                    <h4 className="text-bold text-xl my-5">
                        {footerLink.title}
                    </h4>
                    {footerLink.links.map((link, index) => (
                        <li key={link.name} className="my-2">
                            <a href={link.link} className="hover:text-blue-600">{link.name}</a>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
        <div className="bg-eerieBlack_1 text-white">
            <h2 className="text-center text-xl">طراحی شده با <span className="text-red-600 text-3xl">&hearts;</span> توسط محمد اسمعیلزاده</h2>
        </div>
    </footer>
)

export default Footer;
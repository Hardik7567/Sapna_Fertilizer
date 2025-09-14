"use client";
import { useState } from "react";
import { FaSearch, FaPhone, FaUser, FaShoppingBag, FaChevronDown } from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";
import LogoIcon from "../SvgIcons/LogoIcon";
import CartIcon from "../SvgIcons/CartIcon";
import SearchIcon from "../SvgIcons/SearchIcon";
import UserIcon from "../SvgIcons/UserIcon";

export default function Header() {
  const [language, setLanguage] = useState("English");

  return (
    <header className="w-full">
      <div className="bg-[#003C22] text-white">
        <div className="container flex justify-between">
          <div className=" text-xs md:text-sm flex items-center gap-4 px-6 py-2">
            <p className="font-medium">
              Get <span className="font-bold text-[#FFEB6D]">30% Off</span> on your first order
            </p>
            <p className="font-medium flex items-center gap-2">
              <LuSparkles color="#FFEB6D" /> Order now and get it within{" "}
              <span className="text-yellow-400 font-semibold">20 minutes</span>
            </p>
          </div>

          <button className="bg-[#FD820B] text-white px-4 py-2 text-sm font-medium flex items-center gap-2 hover:bg-orange-700 shadow">
            Call to Order <img src="/call.svg" alt="call-icon" /> <span>+91 70431 12918</span>
          </button>
        </div>
      </div>

      <div className=" bg-white">
        <div className="flex justify-between items-center container px-0 py-4">
          <div className="flex items-center gap-2">
            <LogoIcon />
          </div>

          <div className="mx-8 relative">
            <button className="absolute left-1 top-0 bottom-0 m-auto w-[40px] h-[40px] flex justify-center items-center bg-[#fff] rounded-full">
              <SearchIcon className="text-gray-500" />
            </button>
            <input
              type="text"
              placeholder="Search you product, category or brands"
              className="lg:w-[470px] min-h-[46px] pl-[52px] pr-4 py-2 bg-[#F3F3F5] border border-[#E0E2E7] text-[#4D4D4D] placeholder-[#4D4D4D] rounded-full text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex items-center gap-6 text-[#003C22]">
            {/* <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            <option>English</option>
            <option>Hindi</option>
          </select> */}

            <div className="flex items-center gap-1 text-[#003C22] cursor-pointer hover:text-green-700">
              <UserIcon className="" />
              <span className="text-sm font-medium">SapanaUser</span>
            </div>

            <div className="flex items-center gap-1 text-[#003C22] cursor-pointer hover:text-green-700">
              <CartIcon />
              <span className="text-sm font-medium">Bag</span>
            </div>

          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-t border-[#E0E2E7]">
        <ul className="flex items-center justify-center px-6 py-3 gap-8 text-gray-700 font-medium text-sm">
          <li className="text-[15px] font-medium tracking-wider flex items-center gap-2 text-[#003C22] cursor-pointer hover:text-green-700">Brands <FaChevronDown /></li>
          <li className="text-[15px] font-medium tracking-wider flex items-center gap-2 text-[#003C22] cursor-pointer hover:text-green-700">Fertilizers <FaChevronDown /></li>
          <li className="text-[15px] font-medium tracking-wider flex items-center gap-2 text-[#003C22] cursor-pointer hover:text-green-700">Seeds <FaChevronDown /></li>
          <li className="text-[15px] font-medium tracking-wider flex items-center gap-2 text-[#003C22] cursor-pointer hover:text-green-700">Fungicides <FaChevronDown /></li>
          <li className="text-[15px] font-medium tracking-wider flex items-center gap-2 text-[#003C22] cursor-pointer hover:text-green-700">Herbicides <FaChevronDown /></li>
          <li className="text-[15px] font-medium tracking-wider flex items-center gap-2 text-[#003C22] cursor-pointer hover:text-green-700">Category <FaChevronDown /></li>
        </ul>
      </nav>
    </header>
  );
}

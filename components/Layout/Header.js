// "use client";
// import { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";
// import { LuSparkles } from "react-icons/lu";
// import CartIcon from "../SvgIcons/CartIcon";
// import LogoIcon from "../SvgIcons/LogoIcon";
// import SearchIcon from "../SvgIcons/SearchIcon";
// import UserIcon from "../SvgIcons/UserIcon";


// export default function Header() {
//   const [language, setLanguage] = useState("English");

//   return (
//     <header className="w-full">
//       <div className="bg-[#003C22] text-white">
//         <div className="container mx-auto flex justify-between">
//           <div className=" text-xs md:text-sm flex items-center gap-4 px-6 py-2">
//             <p className="font-medium">
//               Get <span className="font-bold text-[#FFEB6D]">30% Off</span> on your first order
//             </p>
//             <p className="font-medium flex items-center gap-2">
//               <LuSparkles color="#FFEB6D" /> Order now and get it within{" "}
//               <span className="text-yellow-400 font-semibold">20 minutes</span>
//             </p>
//           </div>

//           <button className="bg-[#FD820B] text-white px-4 py-2 text-sm font-medium flex items-center gap-2 hover:bg-orange-700 shadow">
//             Call to Order <img src="/call.svg" alt="call-icon" /> <span>+91 70431 12918</span>
//           </button>
//         </div>
//       </div>

//       <div className=" bg-white">
//         <div className="flex justify-between items-center container mx-auto px-0 py-5">
//           <div className="flex items-center gap-2">
//             <LogoIcon />
//           </div>

//           <div className="mx-8 relative">
//             <button className="absolute left-1 top-0 bottom-0 m-auto w-[40px] h-[40px] flex justify-center items-center bg-[#fff] rounded-full">
//               <SearchIcon className="text-gray-500" />
//             </button>
//             <input
//               type="text"
//               placeholder="Search you product, category or brands"
//               className="lg:w-[470px] min-h-[46px] pl-[52px] pr-4 py-2 bg-[#F3F3F5] border border-[#E0E2E7] text-[#4D4D4D] placeholder-[#4D4D4D] rounded-full text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>

//           <div className="flex items-center gap-6 text-[#003C22]">
//             <div className="relative">
//               <select
//                 value={language}
//                 onChange={(e) => setLanguage(e.target.value)}
//                 className="border text-[15px] font-semibold px-4 rounded-[12px] pe-8 py-2 appearance-none text-sm border-[#003C22]"
//               >
//                 <option>English</option>
//                 <option>Hindi</option>
//               </select>
//               <FaChevronDown className="absolute top-0 bottom-0 right-2 m-auto" />
//             </div>

//             <div className="flex items-center gap-1 text-[#003C22] cursor-pointer hover:text-green-700">
//               <UserIcon className="" />
//               <span className="text-[15px] font-semibold">SapanaUser</span>
//               <FaChevronDown />
//             </div>

//             <div className="flex items-center gap-1 text-[#003C22] cursor-pointer hover:text-green-700">
//               <CartIcon />
//               <span className="text-[15px] font-semibold">Bag</span>
//             </div>

//           </div>
//         </div>
//       </div>

//       <nav className="bg-white border-b border-t border-[#E0E2E7]">
//         <ul className="flex items-center justify-center px-6 py-3 gap-8 text-gray-700 font-medium text-sm">
//           <li className="text-[15px] font-medium tracking-wider flex items-center gap-2 text-[#003C22] cursor-pointer hover:text-green-700">Brands <FaChevronDown size={12} /></li>
//           <li className="text-[15px] font-medium tracking-wider flex items-center gap-2 text-[#003C22] cursor-pointer hover:text-green-700">Fertilizers <FaChevronDown size={12} /></li>
//           <li className="text-[15px] font-medium tracking-wider flex items-center gap-2 text-[#003C22] cursor-pointer hover:text-green-700">Seeds <FaChevronDown size={12} /></li>
//           <li className="text-[15px] font-medium tracking-wider flex items-center gap-2 text-[#003C22] cursor-pointer hover:text-green-700">Fungicides <FaChevronDown size={12} /></li>
//           <li className="text-[15px] font-medium tracking-wider flex items-center gap-2 text-[#003C22] cursor-pointer hover:text-green-700">Herbicides <FaChevronDown size={12} /></li>
//           <li className="text-[15px] font-medium tracking-wider flex items-center gap-2 text-[#003C22] cursor-pointer hover:text-green-700">Category <FaChevronDown size={12} /></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }


"use client";
import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";
import CartIcon from "../SvgIcons/CartIcon";
import LogoIcon from "../SvgIcons/LogoIcon";
import SearchIcon from "../SvgIcons/SearchIcon";
import UserIcon from "../SvgIcons/UserIcon";
import SelectDownSvg from "../SvgIcons/SelectDownSvg";
import HeaderDownSvg from "../SvgIcons/HeaderDownSvg";

export default function Header() {
  const [language, setLanguage] = useState("English");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-30">
      <div className="bg-[#003C22] text-white">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-xs md:text-sm flex items-center gap-2 md:gap-4 py-2">
            <p className="font-medium">
              Get{" "}
              <span className="font-bold text-[#FFEB6D]">30% Off</span> on your
              first order
            </p>
            <p className="hidden sm:flex font-medium items-center gap-2">
              <LuSparkles color="#FFEB6D" /> Order now and get it within{" "}
              <span className="text-yellow-400 font-semibold">20 minutes</span>
            </p>
          </div>

          <button className="hidden md:flex cursor-pointer bg-[#FD820B] text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium items-center gap-2 hover:bg-orange-700 shadow">
            Call to Order <img src="/call.svg" alt="call-icon" />{" "}
            <span>+91 70431 12918</span>
          </button>
        </div>
      </div>

      <div className="bg-white border-b border-[#E0E2E7]">
        <div className="flex justify-between items-center container mx-auto px-4 py-4 md:py-5">

          <div className="flex items-center gap-2">
            <LogoIcon />
          </div>


          <div className="flex-1 mx-4 md:mx-8 relative hidden sm:block">
            <button className="absolute bg-[#fff] left-1 top-0 bottom-0 m-auto w-[40px] h-[40px] flex justify-center items-center rounded-full">
              <SearchIcon className="text-gray-500" />
            </button>
            <input
              type="text"
              placeholder="Search your product, category or brands"
              className="w-full lg:w-[470px] min-h-[46px] pl-[48px] pr-4 py-2 bg-[#F3F3F5] border border-[#E0E2E7] text-[#4D4D4D] placeholder-[#4D4D4D] rounded-full text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>


          <div className="flex items-center gap-4 text-[#003C22]">

            <div className="hidden md:block relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border text-[14px] md:text-[15px] font-medium px-3 md:px-4 md:pr-8 rounded-[10px] pe-8 cursor-pointer py-1.5 md:py-2 appearance-none border-[#003C22]"
              >
                <option>English</option>
                <option>Hindi</option>
              </select>
              <SelectDownSvg className="absolute top-0 bottom-0 right-2 m-auto text-xs" />
            </div>


            <div className="hidden sm:flex items-center gap-1 cursor-pointer hover:text-green-700">
              <UserIcon />
              <span className="text-[14px] md:text-[15px] font-semibold">
                SapanaUser
              </span>
              <HeaderDownSvg />
            </div>


            <div className="flex items-center gap-1 cursor-pointer hover:text-green-700">
              <div className="relative">
                <CartIcon />
                <div className="absolute -top-2 right-0 text-[10px] font-normal bg-[#FB212F] w-[13px] h-[13px] rounded-full text-[#fff] flex justify-center items-center">2</div>
              </div>
              <span className="hidden sm:inline text-[14px] md:text-[15px] font-semibold">
                Bag
              </span>
            </div>


            <button
              className="sm:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>


        <div className="block sm:hidden px-4 pb-3">
          <div className="relative">
            <button className="absolute bg-[#fff] left-1 top-0 bottom-0 m-auto w-[40px] h-[40px] flex justify-center items-center rounded-full">
              <SearchIcon className="text-gray-500" />
            </button>
            <input
              type="text"
              placeholder="Search your product, category or brands"
              className="w-full min-h-[42px] pl-[48px] pr-4 py-2 bg-[#F3F3F5] border border-[#E0E2E7] text-[#4D4D4D] placeholder-[#4D4D4D] rounded-full text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>


      <nav
        className={`bg-white border-b border-[#E0E2E7] transition-all duration-300 ${menuOpen ? "max-h-screen" : "max-h-0 sm:max-h-none"
          } overflow-hidden sm:overflow-visible`}
      >
        <ul className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-center px-6 py-3 gap-4 sm:gap-8 text-gray-700 font-medium text-sm">
          <li className="text-[15px] font-medium tracking-wider flex items-center gap-[1px] text-[#003C22] cursor-pointer hover:text-green-700">
            Brands <HeaderDownSvg />
          </li>
          <li className="text-[15px] font-medium tracking-wider flex items-center gap-[1px] text-[#003C22] cursor-pointer hover:text-green-700">
            Fertilizers <HeaderDownSvg />
          </li>
          <li className="text-[15px] font-medium tracking-wider flex items-center gap-[1px] text-[#003C22] cursor-pointer hover:text-green-700">
            Seeds <HeaderDownSvg />
          </li>
          <li className="text-[15px] font-medium tracking-wider flex items-center gap-[1px] text-[#003C22] cursor-pointer hover:text-green-700">
            Fungicides <HeaderDownSvg />
          </li>
          <li className="text-[15px] font-medium tracking-wider flex items-center gap-[1px] text-[#003C22] cursor-pointer hover:text-green-700">
            Herbicides <HeaderDownSvg />
          </li>
          <li className="text-[15px] font-medium tracking-wider flex items-center gap-[1px] text-[#003C22] cursor-pointer hover:text-green-700">
            Category <HeaderDownSvg />
          </li>
        </ul>
      </nav>
    </header>
  );
}

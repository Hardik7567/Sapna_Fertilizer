// import FooterCallSvg from "../SvgIcons/FooterCallSvg";
// import FooterLogoIcon from "../SvgIcons/FooterLogoIcon";
// import SearchIcon from "../SvgIcons/SearchIcon";

// export default function Footer() {
//   return (
//     <footer className="bg-[#003C22] text-white py-14 relative">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8">
//         {/* First Column - Bigger Width */}
//         <div className="pr-10">
//           <FooterLogoIcon />
//           <p className="my-12 text-[15px] font-semibold leading-[22px]">
//             Winter-wise Farming: Curated for Crops, Carefully Chosen for You.
//             Winter-wise Farming: Curated for Crops, Carefully Chosen for You.
//           </p>

//           <div className="relative min-w-[320px] mt-4">
//             <button className="absolute right-1 top-0 bottom-0 m-auto w-[40px] h-[40px] flex justify-center items-center bg-[#FFEB6D] rounded-full">
//               <SearchIcon className="text-gray-500" />
//             </button>
//             <input
//               type="text"
//               placeholder="Enter phone number for daily updates"
//               className="min-h-[46px] min-w-[320px] w-full pr-[52px] pl-4 py-2 bg-[#fff] border border-[#E0E2E7] text-[#4D4D4D] placeholder-[#4D4D4D] rounded-full text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-[18px] font-medium mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="text-[15px] font-semibold hover:underline">Shop</a></li>
//             <li><a href="#" className="text-[15px] font-semibold hover:underline">About Us</a></li>
//             <li><a href="#" className="text-[15px] font-semibold hover:underline">Contact Us</a></li>
//           </ul>
//         </div>

//         {/* Categories */}
//         <div>
//           <h3 className="text-[18px] font-medium mb-4">Categories</h3>
//           <ul className="space-y-2 text-sm">
//             <li className="text-[15px] font-semibold">Fungicide</li>
//             <li className="text-[15px] font-semibold">Herbicide</li>
//             <li className="text-[15px] font-semibold">Insecticide</li>
//             <li className="text-[15px] font-semibold">Fertilizer</li>
//             <li className="text-[15px] font-semibold">Redoneticide</li>
//             <li className="text-[15px] font-semibold">Seeds</li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-[18px] font-medium mb-4">Contact Details</h3>
//           <div className="flex items-center space-x-4">
//             <FooterCallSvg />
//             <div>
//               <p className="text-[18px] font-medium">+91 70431 12818</p>
//               <p className="text-[14px]">Phone Number</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container m-auto">
//         <div className="border-[#fff] w-[80%] border-t-[0.5px] mt-14 pt-10 text-[15px] font-medium">
//           ©2024 Sapna Fertilizers Pvt Ltd
//         </div>
//       </div>
//       <div className="absolute right-0 bottom-0">
//         <img src="/1.png" alt="footer_bg" />
//       </div>
//     </footer>
//   );
// }


import FooterBackSvg from "../SvgIcons/FooterBackSvg";
import FooterCallSvg from "../SvgIcons/FooterCallSvg";
import FooterLogoIcon from "../SvgIcons/FooterLogoIcon";
import SearchIcon from "../SvgIcons/SearchIcon";

export default function Footer() {
  return (
    <footer className="bg-[#003C22] text-white py-12 relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 px-4 md:px-0">
        <div className="md:pr-10">
          <FooterLogoIcon />

          <p className="my-8 text-[14px] md:text-[15px] font-medium leading-[22px] max-w-[480px]">
            Winter-wise Farming: Curated for Crops, Carefully Chosen for You.
            Winter-wise Farming: Curated for Crops, Carefully Chosen for You.
          </p>

          <div className="relative w-full mt-4 mb-4">
            <input
              type="text"
              placeholder="Enter phone number for daily updates"
              className="min-h-[46px] w-full pr-[52px] pl-4 py-2 bg-[#fff] border border-[#E0E2E7] text-[#4D4D4D] placeholder-[#4D4D4D] rounded-full text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="absolute right-1 top-0 bottom-0 m-auto w-[40px] h-[40px] flex justify-center items-center bg-[#FFEB6D] rounded-full">
              <FooterBackSvg />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold mb-8">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-[15px] font-medium hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-[15px] font-medium hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-[15px] font-medium hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold mb-8">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-[15px] font-medium">Fungicide</li>
            <li className="text-[15px] font-medium">Herbicide</li>
            <li className="text-[15px] font-medium">Insecticide</li>
            <li className="text-[15px] font-medium">Fertilizer</li>
            <li className="text-[15px] font-medium">Rodenticide</li>
            <li className="text-[15px] font-medium">Seeds</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold mb-8">Contact Details</h3>
          <div className="flex items-center gap-4">
            <FooterCallSvg />
            <div>
              <p className="text-[18px] font-medium">+91 70431 12818</p>
              <p className="text-[14px]">Phone Number</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="border-[#fff]/40 border-t mt-12 pt-10 text-[14px] md:text-[15px] font-medium text-center md:text-left">
          ©2024 Sapna Fertilizers Pvt Ltd
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-[140px] md:w-auto pointer-events-none">
        <img src="/1.png" alt="footer_bg" className="w-full h-auto object-contain" />
      </div>
    </footer>
  );
}


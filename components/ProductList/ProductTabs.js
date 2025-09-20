// import { useState } from "react";
// import { Package, Ruler, BookOpen } from "lucide-react";

// export default function ProductTabs() {
//   const [activeTab, setActiveTab] = useState("details");

//   return (
//     <div className="py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white overflow-hidden">
//           <div className="border-gray-200 mb-4">
//             <nav className="flex justify-center gap-3">
//               <button
//                 onClick={() => setActiveTab("details")}
//                 className={`flex items-center p-4 py-3 text-sm font-medium rounded-[12px] ${
//                   activeTab === "details"
//                     ? "bg-[#003C22] border-[#003C22] text-[#fff]"
//                     : "bg-[#F3F3F5] border-[#F3F3F5] hover:border-gray-300"
//                 }`}
//               >
//                 <Package className="w-5 h-5 mr-2" />
//                 Product Details
//               </button>
//               <button
//                 onClick={() => setActiveTab("specification")}
//                 className={`flex items-center p-4 py-3 text-sm font-medium rounded-[12px] ${
//                   activeTab === "specification"
//                     ? "bg-[#003C22] border-[#003C22] text-[#fff]"
//                     : "bg-[#F3F3F5] border-[#F3F3F5] hover:border-gray-300"
//                 }`}
//               >
//                 <Ruler className="w-5 h-5 mr-2" />
//                 Specification
//               </button>
//               <button
//                 onClick={() => setActiveTab("how-to-use")}
//                 className={`flex items-center p-4 py-3 text-sm font-medium rounded-[12px] ${
//                   activeTab === "how-to-use"
//                     ? "bg-[#003C22] border-[#003C22] text-[#fff]"
//                     : "bg-[#F3F3F5] border-[#F3F3F5] hover:border-gray-300"
//                 }`}
//               >
//                 <BookOpen className="w-5 h-5 mr-2" />
//                 How to Use
//               </button>
//             </nav>
//           </div>

//           <div className="p-6 bg-[#fff] border border-[#e7e7e7] rounded-[12px]">
//             {activeTab === "details" && (
//               <div className="space-y-4">
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   About This Product
//                 </h2>
//                 <p className="text-gray-600">
//                   Our premium wireless headphones deliver exceptional sound
//                   quality with active noise cancellation technology. Designed
//                   for comfort during extended wear, they feature memory foam ear
//                   cushions and an adjustable headband.
//                 </p>
//                 <ul className="list-disc pl-5 text-gray-600 space-y-2">
//                   <li>Active Noise Cancellation technology</li>
//                   <li>30-hour battery life on a single charge</li>
//                   <li>Bluetooth 5.2 with multi-device pairing</li>
//                   <li>Built-in microphone for crystal clear calls</li>
//                   <li>Premium materials with durable construction</li>
//                 </ul>
//               </div>
//             )}

//             {activeTab === "specification" && (
//               <div className="space-y-4">
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   Technical Specifications
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <h3 className="font-medium text-gray-700">Audio</h3>
//                     <div className="flex justify-between text-gray-600">
//                       <span>Frequency Response</span>
//                       <span>20Hz - 20kHz</span>
//                     </div>
//                     <div className="flex justify-between text-gray-600">
//                       <span>Driver Diameter</span>
//                       <span>40mm</span>
//                     </div>
//                     <div className="flex justify-between text-gray-600">
//                       <span>Impedance</span>
//                       <span>32Ω</span>
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <h3 className="font-medium text-gray-700">Battery</h3>
//                     <div className="flex justify-between text-gray-600">
//                       <span>Playback Time</span>
//                       <span>30 hours</span>
//                     </div>
//                     <div className="flex justify-between text-gray-600">
//                       <span>Charging Time</span>
//                       <span>2 hours</span>
//                     </div>
//                     <div className="flex justify-between text-gray-600">
//                       <span>Standby Time</span>
//                       <span>200 hours</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "how-to-use" && (
//               <div className="space-y-4">
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   Getting Started
//                 </h2>
//                 <div className="space-y-6">
//                   <div>
//                     <h3 className="font-medium text-gray-700 mb-2">
//                       Pairing with Devices
//                     </h3>
//                     <ol className="list-decimal pl-5 text-gray-600 space-y-2">
//                       <li>
//                         Turn on the headphones by pressing and holding the power
//                         button for 3 seconds
//                       </li>
//                       <li>Enable Bluetooth on your device</li>
//                       <li>
//                         Select "Premium Headphones" from the list of available
//                         devices
//                       </li>
//                       <li>Enjoy your audio experience</li>
//                     </ol>
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-700 mb-2">
//                       Using Noise Cancellation
//                     </h3>
//                     <p className="text-gray-600">
//                       Press the ANC button on the left earcup to toggle between
//                       noise cancellation modes. The indicator light will show
//                       green for active noise cancellation and blue for ambient
//                       sound mode.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import SpecificationsTab from "./SpecificationsTab";
// import HowToUseTab from "./HowToUseTab";
// import DetailsTab from "./DetailsTab";

// export default function ProductTabs() {
//   const [activeTab, setActiveTab] = useState("details");

//   const tabs = [
//     { id: "details", label: "Product Details" },
//     { id: "specification", label: "Specification" },
//     { id: "how-to-use", label: "How to Use" },
//   ];


//   return (
//     <div className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#E0E2E7] mt-8">
//       <div className="container mx-auto">
//         <div className="bg-white overflow-hidden">
//           <div className="mb-6">
//             <nav className="flex justify-center gap-1.5 border border-[#E0E2E7] py-1.5 w-fit m-auto px-1.5 rounded-[12px]">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`p-4 py-2 min-w-[200px] min-h-[36px] text-[14px] rounded-[12px] transition-all cursor-pointer duration-300 ease-in-out font-semibold ${activeTab === tab.id
//                     ? "bg-[#003C22] border-[#003C22] text-white"
//                     : "bg-[#F3F3F5] border-[#F3F3F5] hover:border-gray-300"
//                     }`}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           <div className="p-7 bg-white border border-[#e7e7e7] rounded-[12px]">
//             {activeTab === "details" && (
//               <DetailsTab />
//             )}

//             {activeTab === "specification" && (
//               <SpecificationsTab />
//             )}

//             {activeTab === "how-to-use" && (
//               <HowToUseTab />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import SpecificationsTab from "./SpecificationsTab";
import HowToUseTab from "./HowToUseTab";
import DetailsTab from "./DetailsTab";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("details");

  const tabs = [
    { id: "details", label: "Product Details" },
    { id: "specification", label: "Specification" },
    { id: "how-to-use", label: "How to Use" },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 border-t border-[#E0E2E7] mt-8">
      <div className="container mx-auto">
        <div className="bg-white rounded-[16px] shadow-sm">
          <div className="mb-6">
            <nav className="flex md:justify-center overflow-x-auto gap-2 border border-[#E0E2E7] py-2 px-2 rounded-[12px] scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 min-w-[160px] sm:min-w-[200px] text-[14px] sm:text-[15px] rounded-[12px] transition-all cursor-pointer duration-300 font-semibold whitespace-nowrap ${activeTab === tab.id
                    ? "bg-[#003C22] text-white shadow-md"
                    : "bg-[#F3F3F5] text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-5 sm:p-7 bg-white border border-[#E0E2E7] rounded-[12px]">
            {activeTab === "details" && <DetailsTab />}
            {activeTab === "specification" && <SpecificationsTab />}
            {activeTab === "how-to-use" && <HowToUseTab />}
          </div>
        </div>
      </div>
    </div>
  );
}

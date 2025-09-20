// import React from 'react'

// export default function DetailsTab() {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 divide-y divide-[#E0E2E7] md:divide-y-0 md:divide-x gap-8">

//             {/* Left Column */}
//             <div className="md:pr-10 space-y-6">
//                 <div>
//                     <h2 className="text-[20px] font-semibold text-[#000]">Roundup Herbicide</h2>
//                     <p className="mt-2 text-[14px] font-medium text-[#4D4D4D]">
//                         Controls yield-robbing broadleaf, aquatic and grass weeds. Controls yield-robbing broadleaf, aquatic and grass wedds.
//                     </p>
//                 </div>

//                 <div>
//                     <h3 className="text-[16px] font-semibold text-[#000] mb-2">
//                         About Katyayani Activated Humic + Fulvic Acid Fertilizer
//                     </h3>
//                     <ul className="list-disc pl-5 text-gray-600 space-y-2">
//                         <li className="text-[14px] font-medium leading-[22px] text-[#4D4D4D]">
//                             Katyayani Activated Humic Acid + Fulvic Acid 98 is an Eco-Friendly Biologically Activated product — excellent for modern agriculture.
//                         </li>
//                         <li className="text-[14px] font-medium leading-[22px] text-[#4D4D4D]">
//                             Stimulates root development and plant growth, leading to better yields and quality.
//                         </li>
//                         <li className="text-[14px] font-medium leading-[22px] text-[#4D4D4D]">
//                             Made from organic sources; safe for home gardens, potted plants, and agricultural fields.
//                         </li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h3 className="text-[16px] font-semibold text-[#000] mb-2">
//                         Katyayani Activated Humic Acid + Fulvic Acid 98 Technical Details
//                     </h3>
//                     <ul className="list-disc pl-5 text-gray-600 space-y-2">
//                         <li className="text-[14px] font-medium leading-[22px] text-[#4D4D4D]">
//                             <strong>Technical Content:</strong> Humic Acid and Fulvic Acid 98%
//                         </li>
//                         <li className="text-[14px] font-medium leading-[22px] text-[#4D4D4D]">
//                             <strong>Mode of Action:</strong> Acts as natural chelators, binding nutrients into stable complexes easily absorbed by plant roots. Their high cationic exchange capacity (CEC) helps retain essential ions like calcium, magnesium, and potassium for better plant uptake.
//                         </li>
//                     </ul>
//                 </div>
//             </div>

//             {/* Right Column */}
//             <div className="md:pl-6 space-y-6 pt-8 md:pt-0">
//                 <div>
//                     <h3 className="text-[16px] font-semibold text-[#000] mb-2">Key Features & Benefits</h3>
//                     <ul className="list-disc pl-5 text-gray-600 space-y-2">
//                         <li className="text-[14px] font-medium leading-[22px] text-[#4D4D4D]">
//                             Improves root development of the plant.
//                         </li>
//                         <li className="text-[14px] font-medium leading-[22px] text-[#4D4D4D]">
//                             Stabilizes nitrogen, unlocks phosphorus, and improves soil water-holding capacity.
//                         </li>
//                         <li className="text-[14px] font-medium leading-[22px] text-[#4D4D4D]">
//                             Stimulates enzyme production in plants.
//                         </li>
//                         <li className="text-[14px] font-medium leading-[22px] text-[#4D4D4D]">
//                             Enhances soil fertility and promotes microflora development.
//                         </li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h3 className="text-lg font-semibold text-gray-800 mb-2">Additional Information</h3>
//                     <ul className="list-disc pl-5 text-gray-600 space-y-2">
//                         <li className="text-[14px] font-medium leading-[22px] text-[#4D4D4D]">
//                             Humic Acid improves physical, chemical, and biological soil properties for better crop quality.
//                         </li>
//                         <li className="text-[14px] font-medium leading-[22px] text-[#4D4D4D]">
//                             Fulvic acid strengthens plants naturally and improves nutrient availability through enhanced chelation.
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React from "react";

export default function DetailsTab() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
                {/* Product Title */}
                <div>
                    <h2 className="text-[20px] sm:text-[22px] font-semibold text-[#000]">
                        Roundup Herbicide
                    </h2>
                    <p className="mt-3 text-[14px] sm:text-[15px] font-medium text-[#4D4D4D] leading-relaxed">
                        Controls yield-robbing broadleaf, aquatic and grass weeds. Controls
                        yield-robbing broadleaf, aquatic and grass weeds.
                    </p>
                </div>

                {/* About */}
                <div>
                    <h3 className="text-[16px] font-semibold text-[#000] mb-3">
                        About Katyayani Activated Humic + Fulvic Acid Fertilizer
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li className="text-[14px] font-medium text-[#4D4D4D] leading-[22px]">
                            Eco-friendly biologically activated product — excellent for modern
                            agriculture.
                        </li>
                        <li className="text-[14px] font-medium text-[#4D4D4D] leading-[22px]">
                            Stimulates root development and plant growth for better yields and
                            quality.
                        </li>
                        <li className="text-[14px] font-medium text-[#4D4D4D] leading-[22px]">
                            Made from organic sources; safe for gardens, pots, and
                            agricultural fields.
                        </li>
                    </ul>
                </div>

                {/* Technical Details */}
                <div>
                    <h3 className="text-[16px] font-semibold text-[#000] mb-3">
                        Technical Details
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li className="text-[14px] font-medium text-[#4D4D4D] leading-[22px]">
                            <strong>Technical Content:</strong> Humic Acid + Fulvic Acid 98%
                        </li>
                        <li className="text-[14px] font-medium text-[#4D4D4D] leading-[22px]">
                            <strong>Mode of Action:</strong> Natural chelators that bind
                            nutrients into stable complexes easily absorbed by roots. High CEC
                            helps retain calcium, magnesium, and potassium for better uptake.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
                {/* Key Features */}
                <div>
                    <h3 className="text-[16px] font-semibold text-[#000] mb-3">
                        Key Features & Benefits
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li className="text-[14px] font-medium text-[#4D4D4D] leading-[22px]">
                            Improves root development of plants.
                        </li>
                        <li className="text-[14px] font-medium text-[#4D4D4D] leading-[22px]">
                            Stabilizes nitrogen, unlocks phosphorus, and enhances soil
                            water-holding capacity.
                        </li>
                        <li className="text-[14px] font-medium text-[#4D4D4D] leading-[22px]">
                            Stimulates enzyme production in plants.
                        </li>
                        <li className="text-[14px] font-medium text-[#4D4D4D] leading-[22px]">
                            Enhances soil fertility and promotes microflora development.
                        </li>
                    </ul>
                </div>

                {/* Additional Info */}
                <div>
                    <h3 className="text-[16px] font-semibold text-[#000] mb-3">
                        Additional Information
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li className="text-[14px] font-medium text-[#4D4D4D] leading-[22px]">
                            Humic Acid improves physical, chemical, and biological soil
                            properties for better crop quality.
                        </li>
                        <li className="text-[14px] font-medium text-[#4D4D4D] leading-[22px]">
                            Fulvic acid strengthens plants naturally and improves nutrient
                            availability through chelation.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

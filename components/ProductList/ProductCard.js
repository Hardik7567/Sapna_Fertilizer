// "use client";
// import { useState } from "react";

// export default function ProductCard() {
//   const [quantity, setQuantity] = useState(1);
//   const [selectedVariant, setSelectedVariant] = useState("250ml");
//   const [mainImage, setMainImage] = useState("/bottle.png");

//   const variants = [
//     { size: "250ml", price: 148, originalPrice: 225 },
//     { size: "500ml", price: 148, originalPrice: 225 },
//     { size: "1Ltr", price: 148, originalPrice: 225 },
//     { size: "5Ltr", price: 148, originalPrice: 225 },
//   ];

//   const images = [
//     "/product_image.png",
//     "/product_image.png",
//     "/product_image.png",
//     "/product_image.png",
//     "/product_image.png",
//     "/product_image.png",
//     "/product_image.png",
//     "/product_image.png",
//     "/product_image.png",
//     "/product_image.png",
//   ];

//   const handleQuantityChange = (delta) => {
//     setQuantity((prev) => Math.max(1, prev + delta));
//   };

//   return (
//     <div className="container mx-auto bg-white p-8 flex items-center gap-6">
//       <div className="w-1/2 flex gap-4">
//         <div className="flex flex-col gap-3 overflow-y-auto" style={{ height: '500px', scrollbarWidth: '1px' }}>
//           {images.map((img, idx) => (
//             <div
//               key={idx}
//               className={`border flex justify-center items-center w-[86px] min-h-[86px] h-[86px] bg-[#F3F3F5] rounded-[12px] p-1 cursor-pointer ${mainImage === idx ? "border-[#003C22]" : "border-gray-200"}`}
//               onClick={() => setMainImage(img)}
//             >
//               <img
//                 src={img}
//                 alt="thumb"
//                 className="w-14 h-14 object-contain"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="flex-1 flex justify-center w-[500px] h-[500px] items-center border border-[#E0E2E7] rounded-[12px] bg-[#F3F3F5] p-6">
//           <img
//             src='/product_image.png'
//             alt="Product"
//             className="object-contain h-72"
//           />
//         </div>
//       </div>

//       <div className="w-1/2">
//         <h2 className="text-2xl font-semibold">Roundup Herbicide</h2>
//         <p className="text-gray-600 py-3 leading-relaxed font-medium text-[14px]">
//           Controls yield-robbing broadleaf, aquatic and grass weeds. Controls yield-robbing broadleaf, aquatic and grass wedds.
//         </p>

//         <div className="mt-4 text-2xl text-[#003C22] font-bold flex items-center gap-2">
//           ₹148{" "}
//           <span className="text-gray-500 line-through text-sm">₹225</span>
//         </div>

//         <p className="mt-1 text-sm text-gray-700"><span className="font-medium text-[#000]">Size: </span> 1 bottle (250ml)</p>

//         <hr className="my-6 text-[#E0E2E7]" />

//         <div>
//           <p className="font-semibold text-gray-800 mb-4">Variants</p>
//           <div className="grid gap-4 flex-wrap grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//             {variants.map((variant) => {
//               const isSelected = selectedVariant === variant.size;
//               return (
//                 <div
//                   key={variant.size}
//                   className={`flex flex-col justify-between border rounded-[12px] p-3 py-4 transition cursor-pointer ${isSelected
//                     ? "border-[#003C22] bg-[#E8F7F0]"
//                     : "border-[#E0E2E7] bg-[#F3F3F5] hover:border-[#003C22]"
//                     }`}
//                   onClick={() => setSelectedVariant(variant.size)}
//                 >
//                   <p className="font-semibold text-center text-[17px] text-[#000]">
//                     {variant.size}
//                   </p>

//                   <p className="text-center mt-1 py-1.5">
//                     <span className="text-[#003C22] text-[16px] font-medium">
//                       ₹{variant.price}
//                     </span>{" "}
//                     <span className="line-through text-gray-400 text-[13px]">
//                       ₹{variant.originalPrice}
//                     </span>
//                   </p>

//                   {isSelected ? (
//                     <div className="flex items-center gap-2 mt-3 justify-center">
//                       <div className="flex items-center border border-[#E0E2E7] gap-[1px] rounded-[12px] overflow-hidden">
//                         <button
//                           className="px-2 min-w-[28px] py-1 text-red-500 bg-[#fff] cursor-pointer hover:bg-gray-200"
//                           onClick={() => handleQuantityChange(-1)}
//                         >
//                           -
//                         </button>
//                         <span className="px-2 min-w-[28px] min-h-[32px] flex items-center text-sm font-medium bg-[#fff]">
//                           {quantity.toString().padStart(2, "0")}
//                         </span>
//                         <button
//                           className="px-2 py-1 text-[#000] min-w-[28px] cursor-pointer bg-[#fff] hover:bg-gray-200"
//                           onClick={() => handleQuantityChange(1)}
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   ) : (
//                     <button className="bg-[#003C22] text-white px-2 py-1.5 rounded-[12px] text-[14px] font-semibold mt-3 hover:bg-green-800 transition">
//                       Add to Bag
//                     </button>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import MinusIcon from "../SvgIcons/MinusIcon";
import PlusIcon from "../SvgIcons/PlusIcon";

export default function ProductCard() {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("250ml");
  const [mainImage, setMainImage] = useState("/bottle.png");

  const variants = [
    { size: "250ml", price: 148, originalPrice: 225 },
    { size: "500ml", price: 148, originalPrice: 225 },
    { size: "1Ltr", price: 148, originalPrice: 225 },
    { size: "5Ltr", price: 148, originalPrice: 225 },
  ];

  const images = [
    "/product_image.png",
    "/product_image.png",
    "/product_image.png",
    "/product_image.png",
    "/product_image.png",
    "/product_image.png",
  ];

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="bg-[#FAFAFA]">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex items-center flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4">

          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:h-[500px] pb-2 lg:pb-0">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`border flex-shrink-0 flex justify-center items-center w-[70px] h-[70px] sm:w-[86px] sm:h-[86px] bg-[#F3F3F5] rounded-[12px] p-1 cursor-pointer ${mainImage === img ? "border-[#003C22]" : "border-gray-200"
                  }`}
                onClick={() => setMainImage(img)}
              >
                <img
                  src={img}
                  alt="thumb"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex-1 flex justify-center items-center border border-[#E0E2E7] rounded-[12px] bg-[#F3F3F5] p-4 sm:p-6 min-h-[280px] sm:min-h-[400px] lg:min-h-[500px]">
            <img
              src={'/product_image.png'}
              alt="Product"
              className="object-contain max-h-[250px] sm:max-h-[320px] lg:max-h-[400px]"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#003C22]">
            Roundup Herbicide
          </h2>
          <p className="text-gray-600 py-3 leading-relaxed font-medium text-[14px] sm:text-[15px]">
            Controls yield-robbing broadleaf, aquatic and grass weeds. Controls
            yield-robbing broadleaf, aquatic and grass weeds.
          </p>

          <div className="mt-3 sm:mt-4 text-xl sm:text-2xl text-[#003C22] font-bold flex items-center gap-2">
            ₹148{" "}
            <span className="text-gray-500 line-through text-sm">₹225</span>
          </div>

          <p className="mt-1 text-sm text-gray-700">
            <span className="font-medium text-[#000]">Size: </span> 1 bottle
            (250ml)
          </p>

          <hr className="my-5 sm:my-6 text-[#E0E2E7]" />

          <div>
            <p className="font-semibold text-gray-800 mb-4">Variants</p>
            <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
              {variants.map((variant) => {
                const isSelected = selectedVariant === variant.size;
                return (
                  <div
                    key={variant.size}
                    className={`flex flex-col justify-between border rounded-[12px] p-3 sm:p-4 transition cursor-pointer ${isSelected
                      ? "border-[#003C22] bg-[#E8F7F0]"
                      : "border-[#E0E2E7] bg-[#F3F3F5] hover:border-[#003C22]"
                      }`}
                    onClick={() => setSelectedVariant(variant.size)}
                  >
                    <p className="font-semibold text-center text-[15px] sm:text-[17px] text-[#000]">
                      {variant.size}
                    </p>

                    <p className="text-center mt-1 py-1.5">
                      <span className="text-[#003C22] text-[15px] sm:text-[16px] font-medium">
                        ₹{variant.price}
                      </span>{" "}
                      <span className="line-through text-gray-400 text-[12px] sm:text-[13px]">
                        ₹{variant.originalPrice}
                      </span>
                    </p>

                    <div className="min-h-[39px] pt-[5px]">
                      {isSelected ? (
                        <div className="flex items-center gap-2 justify-center min-w-[108px] w-[108px]">
                          <div className="flex items-center border border-[#E0E2E7] divide-x divide-[#E0E2E7] rounded-[12px] overflow-hidden">
                            <button
                              className="flex justify-center items-center min-h-[36px] min-w-[36px] w-[36px] py-1 text-red-500 bg-[#fff] cursor-pointer hover:bg-gray-200"
                              onClick={() => handleQuantityChange(-1)}
                            >
                              <MinusIcon />
                            </button>
                            <span className="justify-center min-w-[36px] w-[36px] min-h-[36px] flex items-center text-[15px] font-semibold bg-[#fff]">
                              {quantity.toString().padStart(2, "0")}
                            </span>
                            <button
                              className="flex justify-center items-center py-1 text-[#000] min-w-[36px] w-[36px] min-h-[36px] cursor-pointer bg-[#fff] hover:bg-gray-200"
                              onClick={() => handleQuantityChange(1)}
                            >
                              <PlusIcon />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button className="bg-[#003C22] text-white p-[8.5px] min-h-[36px]  rounded-[12px] text-[13px] sm:text-[14px] font-semibold w-full hover:bg-green-800 transition">
                          Add to Bag
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

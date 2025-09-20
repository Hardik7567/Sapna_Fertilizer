// 'use client';
// import { useState } from 'react';

// const products = [
//   {
//     id: 1,
//     name: 'Saaho TO 3251 Tomato...',
//     brand: 'Syngents',
//     price: 148,
//     originalPrice: 225,
//     image: '/similar.png',
//     options: ['3500seeds'],
//   },
//   {
//     id: 2,
//     name: 'Saaho TO 3251 Tomato...',
//     brand: 'Syngents',
//     price: 148,
//     originalPrice: 225,
//     image: '/similar.png',
//     options: ['3500seeds'],
//   },
//   {
//     id: 3,
//     name: 'Saaho TO 3251 Tomato...',
//     brand: 'Syngents',
//     price: 148,
//     originalPrice: 225,
//     image: '/similar.png',
//     options: ['3500seeds'],
//   },
//   {
//     id: 4,
//     name: 'Saaho TO 3251 Tomato...',
//     brand: 'Syngents',
//     price: 148,
//     originalPrice: 225,
//     image: '/similar.png',
//     options: ['3500seeds'],
//   },
//   {
//     id: 5,
//     name: 'Saaho TO 3251 Tomato...',
//     brand: 'Syngents',
//     price: 148,
//     originalPrice: 225,
//     image: '/similar.png',
//     options: ['3500seeds'],
//   },
// ];

// export default function SimilarProducts() {
//   const [selectedOptions, setSelectedOptions] = useState({});

//   const handleOptionChange = (productId, value) => {
//     setSelectedOptions((prev) => ({ ...prev, [productId]: value }));
//   };

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h2 className="text-xl font-semibold mb-6 text-center">Similar Products</h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="border border-gray-200 rounded-xl p-5 bg-white flex flex-col items-start shadow-sm hover:shadow-md transition"
//           >
//             <div className='flex justify-center w-full mb-3'>
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="h-28 object-contain mb-3"
//               />
//             </div>
//             <h3 className="text-[16px] font-semibold truncate w-full">
//               {product.name}
//             </h3>
//             <p className="text-[14px] font-medium text-[#4D4D4D]">{product.brand}</p>

//             <div className="mt-2 text-[#003C22] font-semibold text-[20px]">
//               ₹{product.price}{' '}
//               <span className="line-through text-[#000] text-[14px] font-medium ml-1">
//                 ₹{product.originalPrice}
//               </span>
//             </div>

//             <div className="mt-3 w-full flex items-center gap-2">
//               <select
//                 value={selectedOptions[product.id] || product.options[0]}
//                 onChange={(e) =>
//                   handleOptionChange(product.id, e.target.value)
//                 }
//                 className="border border-[#003C22] rounded-full px-3 py-1 text-[15px] font-semibold focus:ring-1 focus:ring-green-600"
//               >
//                 {product.options.map((option) => (
//                   <option key={option}>{option}</option>
//                 ))}
//               </select>

//               <button className="bg-[#003C22] text-white text-[14px] font-semibold px-4 py-1 rounded-[12px] hover:bg-green-900 transition">
//                 Buy
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

'use client';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Saaho TO 3251 Tomato...',
    brand: 'Syngents',
    price: 148,
    originalPrice: 225,
    image: '/similar.png',
    options: ['3500seeds'],
  },
  {
    id: 2,
    name: 'Saaho TO 3251 Tomato...',
    brand: 'Syngents',
    price: 148,
    originalPrice: 225,
    image: '/similar.png',
    options: ['3500seeds'],
  },
  {
    id: 3,
    name: 'Saaho TO 3251 Tomato...',
    brand: 'Syngents',
    price: 148,
    originalPrice: 225,
    image: '/similar.png',
    options: ['3500seeds'],
  },
  {
    id: 4,
    name: 'Saaho TO 3251 Tomato...',
    brand: 'Syngents',
    price: 148,
    originalPrice: 225,
    image: '/similar.png',
    options: ['3500seeds'],
  },
  {
    id: 5,
    name: 'Saaho TO 3251 Tomato...',
    brand: 'Syngents',
    price: 148,
    originalPrice: 225,
    image: '/similar.png',
    options: ['3500seeds'],
  },
];

export default function SimilarProducts() {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (productId, value) => {
    setSelectedOptions((prev) => ({ ...prev, [productId]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Similar Products
      </h2>

      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-xl p-5 bg-white flex flex-col items-start shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-center w-full mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="h-28 object-contain mb-3"
              />
            </div>
            <h3 className="text-[16px] font-semibold truncate w-full">
              {product.name}
            </h3>
            <p className="text-[14px] font-medium text-[#4D4D4D]">
              {product.brand}
            </p>

            <div className="mt-2 text-[#003C22] font-semibold text-[20px]">
              ₹{product.price}{' '}
              <span className="line-through text-[#000] text-[14px] font-medium ml-1">
                ₹{product.originalPrice}
              </span>
            </div>

            <div className="mt-3 w-full flex items-center gap-2">
              <select
                value={selectedOptions[product.id] || product.options[0]}
                onChange={(e) =>
                  handleOptionChange(product.id, e.target.value)
                }
                className="border border-[#003C22] rounded-full px-3 py-1 text-[15px] font-semibold focus:ring-1 focus:ring-green-600"
              >
                {product.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>

              <button className="bg-[#003C22] text-white text-[14px] font-semibold px-4 py-1 rounded-[12px] hover:bg-green-900 transition">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="sm:hidden flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[220px] border border-gray-200 rounded-xl p-4 bg-white flex-shrink-0 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-center w-full mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="h-24 object-contain mb-3"
              />
            </div>
            <h3 className="text-[15px] font-semibold truncate w-full">
              {product.name}
            </h3>
            <p className="text-[13px] font-medium text-[#4D4D4D]">
              {product.brand}
            </p>

            <div className="mt-2 text-[#003C22] font-semibold text-[18px]">
              ₹{product.price}{' '}
              <span className="line-through text-[#000] text-[12px] font-medium ml-1">
                ₹{product.originalPrice}
              </span>
            </div>

            <div className="mt-3 w-full flex items-center gap-2">
              <select
                value={selectedOptions[product.id] || product.options[0]}
                onChange={(e) =>
                  handleOptionChange(product.id, e.target.value)
                }
                className="border border-[#003C22] rounded-full px-3 py-1 text-[13px] font-medium focus:ring-1 focus:ring-green-600"
              >
                {product.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>

              <button className="bg-[#003C22] text-white text-[13px] font-semibold px-3 py-1 rounded-[12px] hover:bg-green-900 transition">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

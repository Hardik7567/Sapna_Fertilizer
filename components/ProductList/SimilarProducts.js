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
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-6 text-center">Similar Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-xl p-4 bg-white flex flex-col items-center shadow-sm hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-28 object-contain mb-3"
            />
            <h3 className="text-sm font-medium text-center truncate w-full">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500">{product.brand}</p>

            <div className="mt-2 text-green-800 font-bold text-sm">
              ₹{product.price}{' '}
              <span className="line-through text-gray-400 text-xs ml-1">
                ₹{product.originalPrice}
              </span>
            </div>

            <div className="mt-3 w-full flex items-center gap-2">
              <select
                value={selectedOptions[product.id] || product.options[0]}
                onChange={(e) =>
                  handleOptionChange(product.id, e.target.value)
                }
                className="border border-gray-300 rounded-full px-3 py-1 text-sm flex-1 focus:ring-1 focus:ring-green-600"
              >
                {product.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>

              <button className="bg-green-800 text-white text-sm px-4 py-1 rounded-full hover:bg-green-900 transition">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

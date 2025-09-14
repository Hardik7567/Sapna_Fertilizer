export default function Footer() {
    return (
      <footer className="bg-green-950 text-white py-10 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">🌱 Sapana</span>
              <span className="text-lg font-light">FERTILIZER</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Winter-wise Farming: Curated for Crops, Carefully Chosen for You.
              Winter-wise Farming: Curated for Crops, Carefully Chosen for You.
            </p>
  
            <div className="mt-5 flex items-center bg-white rounded-full overflow-hidden w-full max-w-sm">
              <input
                type="text"
                placeholder="Enter phone number for daily updates"
                className="flex-1 px-4 py-2 text-sm text-black focus:outline-none"
              />
              <button className="bg-yellow-400 text-black px-4 py-2">
                →
              </button>
            </div>
          </div>
  
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>Fungicide</li>
              <li>Herbicide</li>
              <li>Insecticide</li>
              <li>Fertilizer</li>
              <li>Redoneticide</li>
              <li>Seeds</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-4">Contact Details</h3>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-green-900">
                📞
              </div>
              <div>
                <p className="text-sm font-medium">+91 70431 12818</p>
                <p className="text-xs text-gray-300">Phone Number</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-300">
          ©2024 Sapna Fertilizers Pvt Ltd
        </div>
  
        <div className="absolute right-0 bottom-0">
          <svg
            width="100"
            height="120"
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 0C90 40 90 80 60 120H100V0H60Z"
              fill="#EA6A1F"
            />
            <path
              d="M40 20C70 50 70 90 40 120H70V20H40Z"
              fill="#D35400"
            />
          </svg>
        </div>
      </footer>
    );
  }
  
// "use client";
// import React, { useState } from 'react';
// import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';

// const HeaderMain = () => {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   return (
//     <div className="relative border-b border-gray-200">
//        <div className="container max-w-full py-4 px-4 flex items-center justify-between">

//         {/* Left Side - Hamburger, Search Icons, and Email on Small Screens */}
//         <div className="flex items-center space-x-4">
//           <div className="sm:hidden ml-2">
//             <FaBars className="text-gray-500 cursor-pointer" />
//           </div>
//           <div className="sm:hidden ml-6" onClick={toggleSearch}>
//             <FaSearch className="text-gray-500 cursor-pointer" />
//           </div>
//           <div className="hidden lg:block text-gray-500 ml-4">
//             info@khasstore.us
//           </div>
//         </div>

//         {/* Center - Logo */}
//         <div className="flex-grow flex justify-center">
//           <h1 className="text-xl font-bold">KHAS</h1>
//         </div>

//         {/* Right Side - Search and Cart */}
//         <div className="flex items-center space-x-4">
//           <div className="hidden lg:flex">
//             <input
//               type="text"
//               placeholder="Search"
//               className="border border-gray-300 px-2 py-1 rounded text-gray-500 text-sm"
//             />
//           </div>
//           <div className="text-gray-800 cursor-pointer" onClick={toggleCart}>
//             <FaShoppingCart />
//           </div>
//         </div>
//       </div>

//       {/* Small Screen Search Input */}
//       {isSearchOpen && (
//         <div className="sm:hidden fixed top-16 inset-x-0 bg-white p-4 shadow-lg z-40">
//           <div className="flex items-center border border-gray-300 rounded px-2 py-1">
//             <FaSearch className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full outline-none text-gray-500"
//               onBlur={() => setIsSearchOpen(false)}
//             />
//           </div>
//         </div>
//       )}

//       {/* Shopping Cart Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full bg-white shadow-lg p-4 transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
//         style={{ width: '250px', zIndex: 30 }}
//       >
//         <button className="text-gray-500 text-xs mb-4" onClick={toggleCart}>
//           CLOSE
//         </button>
//         <h2 className="text-sm font-semibold mb-2">YOUR BAG</h2>
//         <p className="text-gray-500 text-xs mb-6">Your cart is currently empty.</p>
//         <button
//           className="border border-gray-500 text-gray-500 text-xs px-3 py-1 rounded hover:bg-gray-100"
//           onClick={toggleCart}
//         >
//           CONTINUE SHOPPING
//         </button>
//       </div>

//       {/* Overlay to close cart on outside click */}
//       {isCartOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-20"
//           onClick={toggleCart}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default HeaderMain;

"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


const HeaderMain = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative border-b border-gray-200">
      <div className="container max-w-full py-4 px-4 flex items-center justify-between">
        
        {/* Left Side - Hamburger, Search Icons, and Email on Small Screens */}
        <div className="flex items-center space-x-4">
          <div className="sm:hidden ml-2" onClick={toggleSidebar}>
            <FaBars className="text-gray-500 cursor-pointer" />
          </div>
          <div className="sm:hidden ml-6" onClick={toggleSearch}>
            <FaSearch className="text-gray-500 cursor-pointer" />
          </div>
          <div className="hidden lg:block text-gray-500 ml-4">
            info@khasstore.us
          </div>
        </div>

        {/* Center - Logo */}
        <div className="flex-grow flex justify-center">
          <h1 className="text-xl font-bold">KHAS</h1>
        </div>

        {/* Right Side - Search and Cart */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 px-2 py-1 rounded text-gray-500 text-sm"
            />
          </div>
          <div className="text-gray-800 cursor-pointer" onClick={toggleCart}>
            <FaShoppingCart />
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg z-50 p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-extrabold">ACCESSORIES</h2>
            <FaTimes className="text-gray-500 cursor-pointer" onClick={toggleSidebar} />
            <hr className="my-2" />
          </div>

          <div className="space-y-4">
            {/* Menu Links with Divider Lines */}
            <div>
              <Link href="#" className="text-sm font-bold text-gray-800">New Arrivals</Link>
              <span className="text-xs text-blue-500 ml-2">New</span>
              <hr className="my-2" />
            </div>
            <div>
              <a href="#" className="text-sm font-bold text-gray-800">Women</a>
              <hr className="my-2" />
            </div>
            <div>
              <a href="#" className="text-sm font-bold text-gray-800">LOUNGE 
                WEAR</a>
              <span className="text-xs text-red-500 ml-2">Hot</span>
              <hr className="my-2" />
            </div>
            <div>
              <a href="#" className="text-sm font-bold text-gray-800">BLOGS</a>
              <hr className="my-2" />
            </div>
            {/* Add other menu items in a similar way */}
            
            <div>
              <p className="font-bold text-sm">Call Us: +1 347 315 6595</p>
              <a href="#" className="text-sm  text-gray-800">Register</a>
              <hr className="my-2" />
            </div>
            <div>
              <a href="#" className="text-sm text-gray-800">Sign In</a>
              <hr className="my-2" />
            </div>
            
            <div>
              <p className="font-bold text-sm">Currency</p>
              <div className="flex space-x-2">
                <span className="text-gray-800 text-sm" >USD</span>
                <span className="text-gray-800 text-sm">CAD</span>
              </div>
              <hr className="my-2" />
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-blue-600"><FaFacebook /></a>
              <a href="#" className="text-gray-500 hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="text-gray-500 hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="text-gray-500 hover:text-blue-700"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      )}

      {/* Small Screen Search Input */}
      {isSearchOpen && (
        <div className="sm:hidden fixed top-16 inset-x-0 bg-white p-4 shadow-lg z-40">
          <div className="flex items-center border border-gray-300 rounded px-2 py-1">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none text-gray-500"
              onBlur={() => setIsSearchOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Shopping Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg p-4 transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ width: '250px', zIndex: 30 }}
      >
        <button className="text-gray-500 text-xs mb-4" onClick={toggleCart}>
          CLOSE
        </button>
        <h2 className="text-sm font-semibold mb-2">YOUR BAG</h2>
        <p className="text-gray-500 text-xs mb-6">Your cart is currently empty.</p>
        <button
          className="border border-gray-500 text-gray-500 text-xs px-3 py-1 rounded hover:bg-gray-100"
          onClick={toggleCart}
        >
          CONTINUE SHOPPING
        </button>
      </div>

      {/* Overlay to close sidebar/cart on outside click */}
      {(isCartOpen || isSidebarOpen) && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={() => {
            setIsCartOpen(false);
            setIsSidebarOpen(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default HeaderMain;

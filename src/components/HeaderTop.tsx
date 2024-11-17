// "use client"
// import React, { useState } from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaPinterest,
//   FaTiktok,
//   FaYoutube,
//   FaUser,
// } from "react-icons/fa";
// import { Link, X } from "lucide-react";

// const HeaderTop = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
 
//     <div className="border-b border-gray-200 hidden lg:block bg-gray-50">
//       <div className="container py-1">
//         <div className="flex justify-between items-center">
//           <div className="hidden lg:flex gap-1">
//             <div className="header-top-icon-wrapper ml-10 bg-gray-100 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-blue-500 hover:text-white">
//               <FaFacebook />
//             </div>
//             <div className="header-top-icon-wrapper bg-gray-100 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-purple-200 hover:text-white">
//               <FaInstagram />
//             </div>
//             <div className="header-top-icon-wrapper bg-gray-100 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-red-500 hover:text-white">
//               <FaPinterest />
//             </div>
//             <div className="header-top-icon-wrapper bg-gray-100 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-gray-600 hover:text-white">
//               <FaTiktok />
//             </div>
//             <div className="header-top-icon-wrapper bg-gray-100 rounded-xl p-[6px] text-[14px] cursor-pointer hover:bg-red-400 hover:text-white">
//               <FaYoutube />
//             </div>
//           </div>

//           <div className="flex items-center gap-0">
//             <div className="text-gray-500 text-[12px] mr-2">
//               <b>call us:</b> +1347xxxxxxx
//             </div>

//             {/* Vertical Divider */}
//             <span className="h-4 border-l border-gray-300 mx-2"></span>

//             {/* Sign In / Contact Icon */}
// <div onClick={toggleDrawer} className="cursor-pointer text-gray-500 text-[12px] mr-2 flex items-center">
//   <span className="hidden lg:block">Sign In</span> {/* Text only on large screens */}
//   <FaUser className="block lg:hidden w-4 h-4" /> {/* Icon only on small and medium screens */}
// </div>

//             {/* Vertical Divider */}
//             <span className="h-4 border-l border-gray-300 mx-2"></span>

//             <div className="flex gap-4 mr-4">
//               <select
//                 className="text-gray-500 text-[12px] w-[70px]"
//                 name="currency"
//                 id="currency"
//               >
//                 <option value="USD $">USD $</option>
//                 <option value="CAD $">CAD $</option>
//                 <option value="CAD $">AUS $</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Drawer */}
//       {isDrawerOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50">
//           <div className="bg-white w-80 h-full p-6">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xs font-semibold">Customer Login</h2>
//               <button onClick={toggleDrawer}>
//                 <X className="w-6 h-6 text-gray-500" />
//               </button>
//             </div>

//             {/* Login Form */}
      
      
//             <form>
//               <label className="block mb-2 text-xs font-medium">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="border p-2 w-full mb-4 text-xs"
//               />
//               <label className="block mb-2 text-xs font-medium">Password</label>
//               <input 
//                 type="password"
//                 placeholder="Password"
//                 className="border p-2 w-full mb-4 text-xs"
//               />
//               <button className="bg-black text-white py-2 px-4 w-full mb-4 text-xs">
//                 Login
//               </button>
//               <a
//                 href="#"
//                 className="text-blue-500 text-xs block text-center mb-4"
//               >
//                 Forgot your password?
//               </a>
//               <button className="bg-gray-800 text-white py-2 px-4 w-full text-xs">
//                 Create an Account
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeaderTop;

// "use client"
// import React, { useState } from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaPinterest,
//   FaTiktok,
//   FaYoutube,
//   FaUser,
// } from "react-icons/fa";
// import Link from "next/link";
// import { X } from "lucide-react";

// const HeaderTop = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <div className="border-b border-gray-200 hidden lg:block bg-gray-50">
//       <div className="container py-1">
//         <div className="flex justify-between items-center">
//           <div className="hidden lg:flex gap-1">
//             <div className="header-top-icon-wrapper ml-10 bg-gray-100 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-blue-500 hover:text-white">
//               <FaFacebook />
//             </div>
//             <div className="header-top-icon-wrapper bg-gray-100 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-purple-200 hover:text-white">
//               <FaInstagram />
//             </div>
//             <div className="header-top-icon-wrapper bg-gray-100 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-red-500 hover:text-white">
//               <FaPinterest />
//             </div>
//             <div className="header-top-icon-wrapper bg-gray-100 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-gray-600 hover:text-white">
//               <FaTiktok />
//             </div>
//             <div className="header-top-icon-wrapper bg-gray-100 rounded-xl p-[6px] text-[14px] cursor-pointer hover:bg-red-400 hover:text-white">
//               <FaYoutube />
//             </div>
//           </div>

//           <div className="flex place-items-end gap-0">
//             <div className="text-gray-500 text-[12px] ">
//               <b>call us:</b> +1347xxxxxxx
//             </div>

//             {/* Vertical Divider */}
//             <span className="h-4 border-l border-gray-300 mx-2"></span>

//             {/* Sign In / Contact Icon */}
//             <div onClick={toggleDrawer} className="cursor-pointer text-gray-500 text-[12px] mr-2 flex items-start">
//               <span className="hidden lg:block">Sign In</span> {/* Text only on large screens */}
//               <FaUser className="block lg:hidden w-4 h-4" /> {/* Icon only on small and medium screens */}
//             </div>

//             {/* Vertical Divider */}
//             <span className="h-4 border-l border-gray-300 mx-2"></span>

//             <div className="flex gap-4 mr-4">
//               <select
//                 className="text-gray-500 text-[12px] w-[70px]"
//                 name="currency"
//                 id="currency"
//               >
//                 <option value="USD $">USD $</option>
//                 <option value="CAD $">CAD $</option>
//                 <option value="CAD $">AUS $</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Drawer */}
//       {isDrawerOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50">
//           <div className="bg-white w-80 h-full p-6">
//             <div className="flex justify-between items-center mb-4 mt-4">
//               <h2 className="text-xs font-semibold">Customer Login</h2>
//               <button onClick={toggleDrawer}>
//                 <X className="w-6 h-6 text-gray-500" />
//               </button>
//             </div>

//             {/* Login Form */}
//             <form>
//               <label className="block mb-2 text-xs font-medium">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="border p-2 w-full mb-4 text-xs"
//               />
//               <label className="block mb-2 text-xs font-bold">Password</label>
//               <input 
//                 type="password"
//                 placeholder="Password"
//                 className="border p-2 w-full mb-4 text-xs"
//               />
//               <button className="bg-black text-white py-2 px-4 w-full mb-4 text-xs font-extrabold">
//                 Login
//               </button>

//               {/* Link to LoginPage when "Forgot your password?" is clicked */}
//               <Link href="/LoginPage" className="text-blue-500 text-xs block text-center mb-4">
//                 Forgot your password?
//               </Link>

//               {/* Link to CreateAccountPage when "Create an Account" button is clicked */}
//               <Link href="/CreateAccountPage">
//                 <button type="button" className="bg-gray-800 text-white py-2 px-4 w-full text-xs font-extrabold">
//                   Create an Account
//                 </button>
//               </Link>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeaderTop;
"use client"
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaYoutube,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";


import { X } from "lucide-react";

const HeaderTop = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="border-b border-gray-200 hidden lg:block bg-gray-50">
      <div className="container max-w-full py-1 px-4 flex justify-between items-center">

        {/* Social Media Icons on the Left */}
        <div className="flex gap-2">
          <div className="header-top-icon-wrapper bg-gray-100 rounded-md p-1 text-sm cursor-pointer hover:bg-blue-500 hover:text-white">
            <FaFacebook />
          </div>
          <div className="header-top-icon-wrapper bg-gray-100 rounded-md p-1 text-sm cursor-pointer hover:bg-purple-200 hover:text-white">
            <FaInstagram />
          </div>
          <div className="header-top-icon-wrapper bg-gray-100 rounded-md p-1 text-sm cursor-pointer hover:bg-red-500 hover:text-white">
            <FaPinterest />
          </div>
          <div className="header-top-icon-wrapper bg-gray-100 rounded-md p-1 text-sm cursor-pointer hover:bg-gray-600 hover:text-white">
            <FaTiktok />
          </div>
          <div className="header-top-icon-wrapper bg-gray-100 rounded-md p-1 text-sm cursor-pointer hover:bg-red-400 hover:text-white">
            <FaYoutube />
          </div>
        </div>

        {/* Right-Aligned Section */}
        <div className="flex items-center gap-4 ml-auto justify-end w-full max-w-md">
          <div className="text-gray-500 text-sm">
            <b>Call us:</b> +1347xxxxxxx
          </div>

          <div onClick={toggleDrawer} className="cursor-pointer text-gray-500 text-sm flex items-center">
            <span className="hidden lg:block">Sign In</span>
            <FaUser className="lg:hidden w-4 h-4 ml-1" />
          </div>

          <div>
            <select className="text-gray-500 text-sm w-20" name="currency" id="currency">
              <option value="USD $">USD $</option>
              <option value="CAD $">CAD $</option>
              <option value="AUS $">AUS $</option>
            </select>
          </div>
        </div>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50">
          <div className="bg-white w-80 h-full p-6">
            <div className="flex justify-between items-center mb-4 mt-4">
              <h2 className="text-xs font-semibold">Customer Login</h2>
              <button onClick={toggleDrawer}>
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Login Form */}
            <form>
              <label className="block mb-2 text-xs font-medium">Email Address</label>
              <input type="email" placeholder="Email Address" className="border p-2 w-full mb-4 text-xs" />
              <label className="block mb-2 text-xs font-bold">Password</label>
              <input type="password" placeholder="Password" className="border p-2 w-full mb-4 text-xs" />
              <button className="bg-black text-white py-2 px-4 w-full mb-4 text-xs font-extrabold">Login</button>
              <Link href="/login" className="text-blue-500 text-xs block text-center mb-4">Forgot your password?</Link>
              <Link href="/createaccount">
                <button type="button" className="bg-gray-800 text-white py-2 px-4 w-full text-xs font-extrabold">Create an Account</button>
              </Link>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderTop;

"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isWomenHover, setIsWomenHover] = useState(false);
  const [isNewArrivalsHover, setIsNewArrivalsHover] = useState(false);

  return (
    <div className="hidden lg:block bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-center gap-10 font-extrabold py-2 text-gray-800 text-xs">
          <Link className="navbar__link relative" href={"/"}>HOME</Link>

          {/* New Arrivals Link with Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsNewArrivalsHover(true)}
            onMouseLeave={() => setIsNewArrivalsHover(false)}
          >
            <Link className="navbar__link relative" href={"#"}>NEW ARRIVALS</Link>
            
            {isNewArrivalsHover && (
              <div className="absolute left-0 top-full mt-2 w-[1000px] h-[100px] p-4 bg-white shadow-lg rounded transition-opacity duration-300 ease-in-out z-20 opacity-100">
                <ul className="space-y-4">
                  <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>KURTIES</Link></li>
                  <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>FESTIVE</Link></li>
                  <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>SHAWLS</Link></li>
                </ul>
              </div>
            )}
          </div>

          {/* Women Link with Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsWomenHover(true)}
            onMouseLeave={() => setIsWomenHover(false)}
          >
            <Link className="navbar__link relative" href={"#"}>WOMEN</Link>
            
            {isWomenHover && (
              <div className="absolute left-0 top-full mt-2 w-[1000px] p-4 bg-white shadow-lg rounded transition-opacity duration-300 ease-in-out z-20 opacity-100">
                <div className="grid grid-cols-3 gap-6 text-gray-700 text-xs">
                  <div>
                    <h3 className="font-semibold mb-2">BY SEASON</h3>
                    <ul>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Summer</Link></li>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Winter</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">BY FABRIC</h3>
                    <ul>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Lawn</Link></li>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Chiffon</Link></li>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Khaddar</Link></li>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Linen</Link></li>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Velvet/Silk</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">BY COLLECTION</h3>
                    <ul>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Aizal</Link></li>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Nigar e Khas</Link></li>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Ayman</Link></li>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Dilara</Link></li>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Parishay</Link></li>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Nureh</Link></li>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Meraki</Link></li>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Winter Collection</Link></li>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Luxury Chiffon</Link></li>
                      <li className="font-normal text-gray-600 mb-2"><Link href={"#"}>Lawn Collection</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link className="navbar__link relative" href={"#"}>WINTER</Link>
          <Link className="navbar__link relative" href={"#"}>LOUNGE WEAR</Link>
          <Link className="navbar__link relative" href={"#"}>ACCESSORIES</Link>
          <Link className="navbar__link relative" href={"#"}>BLOG</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

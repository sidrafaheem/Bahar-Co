"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";
interface iAppProps {
  images: any;
}
const ImageGallery = ({ images }: iAppProps) => {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };
  return(
  <div className="grid gap-4 lg:grid-cols-5">
        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
          {images.map((image: any, idx: any) => (
            <div key={idx} className="overflow-hidden rounded-xl bg-gray-100 mt-10">
              <Image
                src={urlFor(image).url()}
                width={300}
                height={300}
                alt="photo"
                className="h-full w-full object-cover object-center cursor-pointer"
                onClick={() => handleSmallImageClick(image)}
              />
            </div>
          ))}

          </div>
          <div className="relative overflow-hidden rounded-xl bg-gray-100 lg:col-span-4 mt-10">
            <Image
            src={urlFor(bigImage).url()}
            alt="photo"
            width={500}
            height={500}
            className="h-full w-full object-cover object-center"
            />
            {/* <span
             className="absolute left-0 top-0 rounded-br-xl 
             bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">HOT ITEMS</span> */}
          </div>
           </div>
);
};

export default ImageGallery;


"use client";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

async function getData() {
  const query = `*[_type == "grid"][0] {
    image1{asset->{url}},
    image2{asset->{url}},
    image3{asset->{url}},
    image4{asset->{url}}
  }`;

  const data = await client.fetch(query);
  return data;
}

const Grid = async () => {
  const data = await getData();

  const images = [
    { url: data.image1.asset.url, label: "New Arrival" },
    { url: data.image2.asset.url, label: "Piece" },
    { url: data.image3.asset.url, label: "Festive" },
    { url: data.image4.asset.url, label: "Summer" },
  ];

  return (
    <div className="mx-auto max-w-screen-1xl ml-10 mr-10 mt-0 p-2 sm:p-4">
      <div className="grid lg:grid-cols-2 gap-2 sm:gap-2 sm:grid-cols-1 sm:grid-w=full">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-gray-200 aspect-[4/3] group"
          >
            <Image
              src={image.url}
              alt={`Grid image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.99]"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
              <span className="text-white text-xl font-semibold">{image.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;

import ImageGallery from "@/components/ImageGallery";
import { fullProduct } from "@/components/interface";
import { client } from "@/sanity/lib/client";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { title } from "process";

async function getData(slug:string){
    const qurey = `*[_type == "product" && slug.current == "${slug}"][0] {
  _id,
    name,
    price,
    images,
    description,
    "slug":slug.currrent,
   " categoryName":category->name
}`;
const data = await client.fetch(qurey)

return data;

}


export default async function ProductPage({params}:{params: {slug:string}}){
    const data: fullProduct = await getData(params.slug)
    return (
        <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
            <ImageGallery images={data.images}/>
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 mt-10 inline-block text-gray-500">{data.categoryName}</span>
              <h2 className="text-xl font-bold text-gray-800 lg:text-xl ">{data.name}</h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full">
                <span>4.2</span>
                <Star />
              </Button>
              <span className="text-xl text-gray-500 transition duration-100">56 Ratings</span>
            </div>
        </div>
</div>
        </div>
    )
}


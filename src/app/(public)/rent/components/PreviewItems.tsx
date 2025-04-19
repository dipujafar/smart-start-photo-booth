"use client";
import type React from "react";
import { useState } from "react";
import Image from "next/image";
import flowerImage from "@/assets/icons/flowerIcon5.png";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Container from "@/components/shared/Container";

// Define the type for our backdrop items
interface BackdropItem {
  id: string;
  image: string;
  title: string;
  price: number;
}

export function PreviewItems() {
  // Initial backdrop items array
  const [backdrops, setBackdrops] = useState<BackdropItem[]>([
    {
      id: "1",
      image: "/rent_image_1.png",
      title: "Garden Escape Backdrop",
      price: 250.0,
    },
    {
      id: "2",
      image: "/rent_image_2.png",
      title: "Floral Escape Backdrop",
      price: 350.0,
    },
    {
      id: "3",
      image: "/rent_image_3.png",
      title: "String Lights Backdrop",
      price: 300.0,
    },
    {
      id: "4",
      image: "/rent_image_4.png",
      title: "Simple Wall Backdrop",
      price: 200.0,
    },
    {
      id: "5",
      image: "/rent_image_5.png",
      title: "Green Grass Wall Backdrop",
      price: 250.0,
    },
    {
      id: "6",
      image: "/rent_image_6.png",
      title: "Printed Backdrop",
      price: 250.0,
    },
    {
      id: "7",
      image: "/rent_image_7.png",
      title: "Roses in Red Backdrop",
      price: 300.0,
    },
    {
      id: "8",
      image: "/rent_image_8.png",
      title: "White Marble Backdrop",
      price: 250.0,
    },
  ]);

  return (
    <Container className="space-y-8">
      <div className="relative border-l-3 border-r-3 border-[#87590E]  ">
        <div className="flex items-center ">
          <span className="w-full h-0.5 bg-[#87590E] -translate-y-[99px]"></span>
          <Image
            src={flowerImage}
            alt="floweImage"
            className="mx-auto max-h-[200px]  -translate-y-[99px]"
          ></Image>
          <span className="w-full h-0.5 bg-[#87590E] -translate-y-[99px]"></span>
        </div>

        {/* Grid of backdrop cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:px-8 px-5 -translate-y-[100px]">
          {backdrops.map((backdrop) => (
            <Card key={backdrop.id} className="overflow-hidden py-0">
              <div className="relative aspect-square">
                <Image
                  src={backdrop.image}
                  alt={backdrop.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="md:px-8 px-5 pb-3">
                <h3 className=" text-xl font-medium">{backdrop.title}</h3>
                <p className="text-xl font-medium">
                  $ {backdrop.price.toFixed(2)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
       
     
        <span className="w-[200px] h-0.5 border-2 border-[#87590E]   block translate-y-1"></span>
        <span className="w-[200px] h-0.5 border-2 border-[#87590E]  ml-auto block"></span>
 
      </div>
    </Container>
  );
}

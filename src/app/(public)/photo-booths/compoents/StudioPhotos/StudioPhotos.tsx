"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel";
  import { cn } from "@/lib/utils";
  
  import Autoplay from "embla-carousel-autoplay";
  import Image from "next/image";

  
  const clothesData = [
    {
      _id: 1,
      image: "/imagePreview1.png",
    },
    {
      _id: 2,
      image: "/imagePreview2.png",
    },
    {
      _id: 3,
      image: "/imagePreview3.png",
    },
    {
      _id: 4,
      image: "/imagePreview2.png",
    },
    {
      _id: 5,
      image: "/imagePreview1.png",
    },
    {
      _id: 6,
      image: "/imagePreview3.png",
    },
    {
      _id: 7,
      image: "/imagePreview2.png",
    },
  ];
  
  const StudioPhotos = () => {
    return (
      <Carousel
        opts={{
          loop: true,
          duration: 60,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className=" border border-red-400"
      >
        <CarouselContent>
          {clothesData?.map((data,index) => (
            <CarouselItem
              key={data?._id}
              className={cn("md:basis-1/2  lg:basis-1/3 2xl:basis-1/4", index % 2 == 0 && "translate-y-44   border border-red-400" )}
            >
              
                <div className="w-full bg-primary-gray/10  px-8 relative group  border border-red-40">
                  <Image
                    src={data?.image}
                    alt="cloth_image"
                    width={1200}
                    height={1200}
                    className={cn(" w-full mx-auto object-cover origin-center rounded-md",index % 2 == 0 && "translate-y-44 border")}
                  ></Image>
                
                </div>
              
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  };
  
  export default StudioPhotos;
  
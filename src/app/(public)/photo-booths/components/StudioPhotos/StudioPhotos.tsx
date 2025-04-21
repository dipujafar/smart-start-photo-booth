"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import Autoplay from "embla-carousel-autoplay";
import { div } from "motion/react-client";
import Image from "next/image";

const clothesData = [
  {
    _id: 1,
    image: "/studio_photos1.png",
    text: "Our Work Is Our Playground",
  },
  {
    _id: 2,
    image: "/studio_photos2.png",
    text: "Our Mission: To Give Back",
  },
  {
    _id: 3,
    image: "/studio_photos3.png",
    text: "Our Creativity Is Continual",
  },
  {
    _id: 4,
    image: "/studio_photos4.png",
    text: "Our Work Is Our Playground",
  },
  {
    _id: 5,
    image: "/studio_photos5.png",
    text: "Our Creativity Is Continual",
  },
  {
    _id: 6,
    image: "/studio_photos3.png",
    text: "Our Mission: To Give Back",
  },
  {
    _id: 7,
    image: "/studio_photos1.png",
    text: "Our Creativity Is Continual",
  },
  {
    _id: 87,
    image: "/studio_photos2.png",
    text: "Our Creativity Is Continual",
  },
];

const StudioPhotos = () => {
  return (
    <div className="bg-[#EADAC1] lg:py-12 py-8">
      <h5 id="photo" className="text-center xl:text-5xl lg:text-3xl text-xl  font-playfair mb-10 max-w-6xl font-bold mx-auto">
        Make every moment unforgettable with high quality photos.
      </h5>
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
        className=""
      >
        <CarouselContent>
          {clothesData?.map((data, index) => (
            <CarouselItem
              key={data?._id}
              className={cn("md:basis-1/2  lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5")}
            >
              <div className="w-full   px-8 relative group  ">
                <h5
                  className={cn(
                    "text-center text-lg font-medium max-w-[150px] mx-auto mb-3",
                    index % 2 != 0 && "hidden"
                  )}
                >
                  {data?.text}
                </h5>
                <Image
                  src={data?.image}
                  alt="cloth_image"
                  width={1200}
                  height={1200}
                  className={cn(
                    " w-full mx-auto object-cover origin-center rounded-xl border p-2 border-primary-gold"
                  )}
                ></Image>

                <h5
                  className={cn(
                    "text-center text-lg font-medium max-w-[150px] mx-auto mt-3",
                    index % 2 == 0 && "hidden"
                  )}
                >
                  {data?.text}
                </h5>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default StudioPhotos;

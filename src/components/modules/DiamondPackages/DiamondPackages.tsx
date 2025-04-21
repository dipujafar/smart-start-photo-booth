import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import DiamondPackagesFeatures from "./DiamondPackagesFeatures";
import waterMarkFlower from "@/assets/images/watermarkflower.png";
import Image from "next/image";
import FAQ from "./FAQ";

const DiamondPackages = () => {
  return (
    <Container className="mt-52 lg:space-y-10 space-y-7">
      <div className="relative">
        <div className="bg-[#83795B] py-20 lg:px-10 px-7 space-y-5 text-white rounded-xl">
          <h4 className="lg:text-5xl text-2xl font-bold">Diamond Package</h4>
          <p className="lg:text-xl md:text-lg font-semibold">
            Customizable Booths tailored to your theme and vibe
          </p>
          <Button className="py-6 w-[220px] bg-[#AB9D6E] hover:bg-gray-700 border-b border-r border-white">
            Book Online <BookIcons />
          </Button>
        </div>
        <div className="xl:absolute -top-1/2 right-5 ">
          <DiamondPackagesFeatures></DiamondPackagesFeatures>
        </div>
        <div className="absolute md:-top-80 -top-52 ">
          <Image src={waterMarkFlower} alt="water_mark_flower"></Image>
        </div>
      </div>
      <FAQ></FAQ>
    </Container>
  );
};

export default DiamondPackages;

function BookIcons() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M8.76664 8.14007V4.40674M16.2333 8.14007V4.40674M7.83331 11.8734H17.1666M5.96664 21.2067H19.0333C20.0642 21.2067 20.9 20.371 20.9 19.3401V8.14007C20.9 7.10914 20.0642 6.2734 19.0333 6.2734H5.96664C4.93571 6.2734 4.09998 7.10914 4.09998 8.14007V19.3401C4.09998 20.371 4.93571 21.2067 5.96664 21.2067Z"
        stroke="white"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

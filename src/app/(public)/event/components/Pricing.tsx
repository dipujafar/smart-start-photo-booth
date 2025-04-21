"use client"
import flowerIcon from "@/assets/icons/flowerIcon6.png";
import SectiontitleSmall from "@/components/shared/SectionTitleSmall";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import diplayImage from "@/assets/images/pricingPageDisplayImage.png";
import Container from "@/components/shared/Container";
import { motion } from "motion/react";
import {
  childrenVariants,
  parentVariants,
} from "@/animation/FramerMotionValiants";
const Pricing = () => {
  return (
    <Container className="2xl:w-[75%]">
      <div className="flex justify-center items-center gap-x-8 flex-row gap-y-5">
        <Image src={flowerIcon} alt="flowerIconImage"></Image>
        <SectiontitleSmall title="Pricing" id="pricing"></SectiontitleSmall>
        <Image src={flowerIcon} alt="flowerIconImage"></Image>
      </div>
      <div className="lg:mt-10 mt-7 flex flex-col lg:flex-row gap-x-4 gap-y-5 ">
        {/* =========== display Image ============== */}
        <div className="flex-1">
          <Image
            src={diplayImage}
            alt="display_image"
            className="h-full"
          ></Image>
        </div>
        {/* ========================= features ====================== */}
        <div className="flex-1">
          <Card className=" mx-auto  h-full bg-[#b5a67d] text-white ">
            <CardHeader className="pb-2">
              <h2 className="text-2xl sm:text-2xl font-bold">
                Phone Booth W/ Vintage Phone
              </h2>
              <p className="text-sm sm:text-base opacity-90">
                What You'll Enjoy :
              </p>
            </CardHeader>
            <CardContent className="space-y-2 pb-4">
              <motion.ul
                variants={parentVariants}
                initial="initial"
                whileInView="animate"
                exit="exit"
                viewport={{ once: true }}
                className="space-y-1 sm:space-y-2"
              >
                {[
                  "Delivery & Installation",
                  "Record Messages All Day",
                  "Personalized Voicemail Greeting",
                  "Audiograms with Custom Photo",
                  "Download All Messages Online",
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={childrenVariants}
                    className="flex items-center gap-2 text-sm sm:text-base"
                  >
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="pt-4">
                <p className="text-sm sm:text-base font-semibold">PRICE</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  $1,450
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 pt-0">
              <Button className="w-full bg-[#b5a67d] hover:bg-[#a39569] border border-white text-white py-2 h-auto text-sm sm:text-base rounded-full">
                Book Online <CalenderIcon></CalenderIcon>
              </Button>
              <p className="text-xl font-medium  px-2">
                Pricing Based On A 45 Mile Radius From Bowie, Maryland,
                Michigan
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Pricing;

function CalenderIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M8.76676 7.33968V3.60635M16.2334 7.33968V3.60635M7.83343 11.073H17.1668M5.96676 20.4063H19.0334C20.0644 20.4063 20.9001 19.5706 20.9001 18.5397V7.33968C20.9001 6.30875 20.0644 5.47301 19.0334 5.47301H5.96676C4.93583 5.47301 4.1001 6.30875 4.1001 7.33968V18.5397C4.1001 19.5706 4.93583 20.4063 5.96676 20.4063Z"
        stroke="white"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

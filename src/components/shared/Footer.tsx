import React from "react";
import Container from "./Container";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { LocationMap } from "./LocationMap";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#1F1F1F] rounded-2xl md:py-10 py-7 lg:mx-10 mx-3">
      <Container className="text-white  px-4 md:px-8  xl:px-28 2xl:px-36 lg:space-y-10 space-y-7">
        <h1 className="xl:text-5xl md:text-3xl text-2xl font-bold font-playfair">
          Explore Tips to Craft an Epic, Unforgettable Gathering!
        </h1>

        <hr className="border-gray-400" />

        {/* =============== footer content ======================= */}
        <div className="flex flex-col flex-wrap xl:justify-between justify-center gap-y-10  md:flex-row  items-start md:gap-x-20 gap-x-3">
          {/* Logo and description */}
          <div>
            <div className="relative ">
              <div>
                <Image
                  src={logo}
                  alt="logo"
                  width={1200}
                  height={1200}
                  className="w-auto h-auto =
                  "
                />
                <div className="ml-2 flex flex-col sm:ml-3 font-playfair">
                  <span className=" font-bold uppercase tracking-wider  ">
                    Sharpshooters of the
                  </span>
                  <span className=" font-bold uppercase tracking-wider  ">
                    Photobooth World
                  </span>
                </div>
              </div>
            </div>
            <p className="md:mt-10 mt-7 max-w-[520px] text-primary-white/70 mx-auto">
              We are Smart Photobooths,  A South Jersey based Open-Air styled
              photobooth, Our lux booth literally wraps all your favorite social
              media features into a very sleek, modern look for all your social
              gatherings! We would love to be apart of your special events and
              help make it an unforgettable experience for you & all your
              guests. Check out our packages and what we offer. We look forward
              to creating memories with you! 
            </p>

            <div className="flex gap-x-5 md:mt-10 mt-7">
                <div className="bg-white p-2 rounded-full">
                    <Link href={"#"}>
                    <Facebook color="#B78242" fill="#B78242"></Facebook>
                    </Link>
                </div>
                <div className="bg-white p-2 rounded-full">
                    <Link href={"#"}>
                    <Instagram color="#B78242" ></Instagram>
                    </Link>
                </div>
            </div>
          </div>

          {/* Links and supports informations */}
          <div className="flex justify-between flex-wrap flex-1 gap-5">
            {/* Account Links */}
            <div>
              <h3 className="mb-4 font-semibold text-[#AB9D6E]">Useful Link</h3>
              <ul className="space-y-3 text-primary-white">
                <li>
                  <Link href="/photo-booths">Photo Ops</Link>
                </li>

                <li>
                  <Link href="/event">Event Rentals</Link>
                </li>
                <li>
                  <Link href="/about-us#why-choose-us">Why choose Us</Link>
                </li>
                <li>
                  <Link href="/about-us">About us</Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="">
              <h3 className="mb-4 font-semibold text-[#AB9D6E]">Contact Us</h3>
              <ul className="space-y-3 text-primary-white">
                <li>
                 <p className="max-w-[250px]"> <span className="font-semibold">Address: </span>  3005 Meadowview
                 Drive Gordons, VA 22942</p>
                </li>
                <li>
                <p className="max-w-[250px]"> <span className="font-semibold">Phone: </span> <Link href={"tel: (248) 505 1234"}> (248) 505 1234</Link></p>
                </li>
                <li>
                <p className="max-w-[250px]"> <span className="font-semibold">Email: </span> <Link href={"mailto:you@gmail.com"}>you@gmail.com</Link></p>
                </li>
              </ul>
            </div>

            {/* Support Information */}
            <div>
              <h3 className="mb-4 font-semibold text-[#AB9D6E]">Direction</h3>
            <LocationMap></LocationMap>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-5">
          {/* social media links */}
          <div className="flex gap-x-2 items-center xl:justify-start justify-center  w-full mt-2 xl:ml-16">
            <Link href="https://www.youtube.com/@churchscroll" target="_blank">
              {/* <Image
                  src={youtubeLogo}
                  alt="youtube"
                  className="size-8"
                ></Image> */}
            </Link>
            <Link
              href="https://www.instagram.com/churchscroll?igsh=Znc1Njhld3FudXNm"
              target="_blank"
            >
              {/* <Image
                  src={instagramIcon}
                  alt="instagramIcon"
                  className="size-7"
                ></Image> */}
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61551473257006&rdid=X4Ofuk1uhr1kUQUr&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18KusYJYoR%2F#"
              target="_blank"
            >
              {/* <Image
                  src={facebookIcon}
                  alt="facebookIcon"
                  className="size-7"
                ></Image> */}
            </Link>
            <Link
              href="https://www.tiktok.com/@churchscroll?_t=ZT-8sEixGTVpFe&_r=1"
              target="_blank"
            >
              {/* <Image src={tiktokIcon} alt="xIcon" className="size-7"></Image> */}
            </Link>
          </div>
        </div>

        <hr className="border-gray-400" />

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <h4 className="text-[#AB9D6E]">© Copyright 2025 | All Rights Reserved </h4>
         
            <ul className="flex gap-x-5 md:gap-x-8">
                <li>
                    <Link href={"#"}>Privacy policy</Link>
                </li>
                <li>
                    <Link href={"#"}>Terms of service</Link>
                </li>
            </ul>
         
        </div>
      </Container>
    </div>
  );
};

export default Footer;

import flowerIcon from "@/assets/icons/flowerIcon6.png";
import Container from "@/components/shared/Container";
import SectiontitleSmall from "@/components/shared/SectionTitleSmall";
import { Dot } from "lucide-react";
import Image from "next/image";
import whyChooseUsImage from "@/assets/images/whyChooseImage.png"

const WhyChooseUs = () => {
  return (
    <Container>
      <div className="flex justify-center items-center gap-x-8 flex-col lg:flex-row gap-y-5">
        <Image src={flowerIcon} alt="flowerIconImage"></Image>
        <SectiontitleSmall title="Why Choose Us?" id="why-choose-us"></SectiontitleSmall>
        <Image src={flowerIcon} alt="flowerIconImage"></Image>
      </div>


      {/* features and image */}
      <div className=" p-6 space-y-8">
      <div className="rounded-lg overflow-hidden shadow-md">
        <Image
          src={whyChooseUsImage}
          alt="Photo booth experience with people having fun with props"
          width={1200}
          height={800}
          className="w-full  object-cover"
        />
      </div>

      <div className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Dot className="size-5 text-primary mt-0.5 flex-shrink-0" />
              <span className=" lg:text-xl text-lg">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="lg:text-xl text-lg space-y-4">
          <p>
            Whether you're celebrating a milestone or hosting a branded event, we're here to add a spark of joy and a
            touch of magic. At Smart Snap Photo, every snap tells a story — and we'd love to be part of yours.
          </p>
          <p >Let's create memories together!</p>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default WhyChooseUs;

const features = [
    "Customizable Booths tailored to your theme and vibe",
    "Instant Prints and Digital Sharing to relive the magic on the spot",
    "Fun Props & Backdrops that bring out everyone's playful side",
    "Professional Setup & Friendly Attendants to keep everything running smoothly",
    "Flexible Packages to suit events big or small",
  ]

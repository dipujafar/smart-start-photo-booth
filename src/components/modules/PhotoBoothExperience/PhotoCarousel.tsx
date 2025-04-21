import React, { useRef, useState, useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { useAutoplay } from "./EmblaCarouselAutoplay";
import { useAutoplayProgress } from "./EmblaCarouselAutoplayProgress";
import Image from "next/image";
import { AutoplayProgressDots } from "./AutoplayProgressDots";
import SectiontitleSmall from "@/components/shared/SectionTitleSmall";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const PhotoCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const progressNode = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);

  // @ts-ignore
  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

  const [currentIndex, setCurrentIndex] = useState(0);

  //@ts-ignore
  useEffect(() => {
    if (emblaApi) {
      const updateIndex = () => {
        setCurrentIndex(emblaApi.selectedScrollSnap());
      };
      emblaApi.on("select", updateIndex);
      return () => emblaApi.off("select", updateIndex);
    }
  }, [emblaApi]);

  const features = [
    {
      description:
        "1. High-Quality Portraits – Crisp, studio-style photos with stunning clarity.",
    },
    {
      description:
        "2. Professional-Grade Camera & Lighting – Equipped with DSLR cameras and premium lighting setups.",
    },
    {
      description:
        "3.Perfect for Any Occasion – Ideal for weddings, parties, corporate events, and more.",
    },
    {
      description:
        "4. Group-Friendly Framing – Spacious booth layout that fits the whole squad.",
    },
    {
      description:
        "5. Instant Prints & Digital Copies – Get your photos printed or sent to your phone in seconds.",
    },
    {
      description:
        "6.  Fully Customizable Themes – Match the booth design to your event’s vibe or brand.",
    },
    {
      description:
        "7. Easy to Use, Fun to Experience – Just tap and pose—no setup required.",
    },
    {
      description:
        "8. Props & Backdrops Included Choose from a variety of fun props and scenic backgrounds",
    },
  ];

  return (
    <div className="embla">
      <div className=" flex justify-between flex-col md:flex-row items-center md:items-start">
       <h2></h2>

        <div>
          <div className="embla__buttons">
            <PrevButton
              onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={() => onAutoplayButtonClick(onNextButtonClick)}
              disabled={nextBtnDisabled}
            />
          </div>

          <div
            className={`embla__progress`.concat(
              showAutoplayProgress ? "" : " embla__progress--hidden"
            )}
          >
            <div className="embla__progress__bar" ref={progressNode} />
          </div>

          <AutoplayProgressDots
            activeIndex={currentIndex}
            dotCount={slides.length}
            //   colors={['#', '#FBBF24', '#34D399', '#60A5FA', '#A78BFA', '#F472B6']}
          />
        </div>
      </div>
      {/* ====================== photo carousel and  contents =============================== */}
      <div className="bg-[#EADAC1] pb-20 rounded-b-2xl lg:mt-5 mt-3">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((image, index) => (
              <div className="embla__slide " key={index}>
                <div className="embla__slide__number">
                  <Image
                    src={image}
                    alt="image_section"
                    width={1200}
                    height={1200}
                    className="2xl:h-[650px] xl:h-[600px] lg:h-[500px] md:h-[450px] h-[320px]  object-cover origin-center rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 xl:px-16 px-5">
          <div>
            <SectiontitleSmall
              title="The Smart Start Photobooth "
              className="text-start"
            ></SectiontitleSmall>
            {/* <h1 className="text-2xl text-primary-black">Starting at $1,100</h1> */}
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:gap-5 gap-3 ">
              {features.map((feature, index) => (
                <p key={index} className="xl:text-xl">
                  {feature?.description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;

import React, { useRef, useState, useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { useAutoplay } from './EmblaCarouselAutoplay'
import { useAutoplayProgress } from './EmblaCarouselAutoplayProgress'
import Image from 'next/image'
import { AutoplayProgressDots } from './AutoplayProgressDots'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const PhotoCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const progressNode = useRef<HTMLDivElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 })
  ])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi)

  // @ts-ignore
  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode)

  const [currentIndex, setCurrentIndex] = useState(0)

//@ts-ignore
  useEffect(() => {
    if (emblaApi) {
      const updateIndex = () => {
        setCurrentIndex(emblaApi.selectedScrollSnap())
      }
      emblaApi.on('select', updateIndex)
      return () => emblaApi.off('select', updateIndex)
    }
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((image, index) => (
            <div className="embla__slide border" key={index}>
              <div className="embla__slide__number">
                <Image
                  src={image}
                  alt='image_section'
                  width={1200}
                  height={1200}
                  className='h-[700px] object-cover origin-center'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
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
            showAutoplayProgress ? '' : ' embla__progress--hidden'
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
  )
}

export default PhotoCarousel

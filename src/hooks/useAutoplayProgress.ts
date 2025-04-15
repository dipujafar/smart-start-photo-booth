import { useEffect, useRef, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

type UseAutoplayProgressType = {
  activeDotIndex: number
}

export const useAutoplayProgress = (
  emblaApi: EmblaCarouselType | undefined,
  numberOfDots: number
): UseAutoplayProgressType => {
  const [activeDotIndex, setActiveDotIndex] = useState(0)
  const intervalId = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay || numberOfDots <= 0) return

    const updateDots = () => {
      const duration = autoplay.timeUntilNext();
    //@ts-ignore
      const stepDuration = duration / numberOfDots

      let currentStep = 0
      clearInterval(intervalId.current!)
      setActiveDotIndex(0)

      intervalId.current = setInterval(() => {
        currentStep += 1
        setActiveDotIndex(currentStep)

        if (currentStep >= numberOfDots) {
          clearInterval(intervalId.current!)
        }
      }, stepDuration)
    }

    emblaApi
      .on('autoplay:timerset', updateDots)
      .on('autoplay:timerstopped', () => {
        clearInterval(intervalId.current!)
        setActiveDotIndex(0)
      })

    return () => {
      clearInterval(intervalId.current!)
    }
  }, [emblaApi, numberOfDots])

  return {
    activeDotIndex
  }
}

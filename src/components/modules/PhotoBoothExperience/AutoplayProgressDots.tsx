import React from 'react'

type Props = {
  activeIndex: number
  dotCount: number
  colors?: string[]
}

export const AutoplayProgressDots: React.FC<Props> = ({
  activeIndex,
  dotCount,
  colors = []
}) => {
  return (
    <div className="flex gap-2 justify-center items-center py-2">
      {Array.from({ length: dotCount }).map((_, index) => {
        const isActive = index <= activeIndex
        const color = colors[index % colors.length] || '#675004' // Tailwind gray-300 fallback

        return (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300`}
            style={{ backgroundColor: isActive ? color : '#e5e7eb' }} // Tailwind gray-200 fallback
          />
        )
      })}
    </div>
  )
}

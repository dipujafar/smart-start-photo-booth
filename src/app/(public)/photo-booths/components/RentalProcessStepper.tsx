import React from "react"
import checkedIcon from "@/assets/icons/checkedImage.png"
import Image from "next/image"

interface StepperProps {
  steps?: {
    label: string
    completed: boolean
  }[]
  currentStep?: number
}

export default function RentalProcessStepper({
  steps = [
    { label: "Pick Your Booth", completed: true },
    { label: "Customize Your Experience", completed: false },
    { label: "Reserve Your Date", completed: false },
  ],
  currentStep = 0,
}: StepperProps) {
  return (
    <div className="w-full py-4 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className=" md:text-3xl text-xl font-bold mb-4 text-center">Rental Process Explained:</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-center  gap-x-1.5">
                <Image src={checkedIcon} alt="checkedIcon"></Image>
                <span className="font-medium">{step.label}</span>
              </div>

              {/* {index < steps.length - 1 && <div className="hidden md:block text-[#2d2d2d] font-medium">•</div>} */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

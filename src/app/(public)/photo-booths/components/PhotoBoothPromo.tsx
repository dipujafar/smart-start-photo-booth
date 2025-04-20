import { Check } from "lucide-react"

export default function PhotoBoothPromo() {
  return (
    <div>
      <div className="space-y-6 md:space-y-8">
        {/* Breadcrumb */}
        <div className="text-xs md:text-sm uppercase tracking-wider ">
          PHOTO BOOTHS &gt; SMART START BOOTH
        </div>

        {/* Main Heading */}
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold  leading-tight font-playfair">
            Join The Smart Start{" "}
            <span className="relative inline-block">
              <span className="absolute -left-6 top-1/2 transform -translate-y-1/2">
               
              </span>
              Photo Booth
            </span>{" "}
            Family
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg  max-w-2xl">
            "With a Photo Booth, you're not just getting photos—you're getting a premium experience! Our friendly team
            and high-quality images ensure you're well taken care of."
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-3 md:space-y-4 pt-2">
          <FeatureItem text="Capture Your Best Self in Stunning Photos" />
          <FeatureItem text="Photo Booth Host Ensures Guests Shine" />
          <FeatureItem text="Custom Graphic Overlays Just for You" />
          <FeatureItem text="Pro-Level Studio Lighting for Flawless Shots" />
          <FeatureItem text="Instant Photo Keepsakes in Seconds" />
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-green-600 rounded-full border border-[#AB9D6E] flex-shrink-0 p-0.5">
        <Check size={14} color="#675004" />
      </div>
      <span className="text-sm md:text-base ">{text}</span>
    </div>
  )
}

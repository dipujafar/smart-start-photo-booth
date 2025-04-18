import PricingCard from "@/components/ui/pricing-card"
import { cn } from "@/lib/utils"

// Sample data array for packages
const pricingPackages = [
  {
    title: "Bronze Packages",
    subtitle: "Customizable Booths tailored to your theme and vibe",
    price: "400",
    buttonText: "Book Now",
    buttonLink: "#",
    features: [
      "3 Hour Digital Photo Booth (No prints)",
      "Setup / Breakdown of Photobooth",
      "Media Delivered via Text, E-Mail, Airdrop or QR Code",
      "Unlimited Digital: GIFs, Boomerangs, Filters & Still Photos",
      "Black or White Backdrop",
      "Custom LED Light Pattern / Color Choice",
      "Custom Tap to Start Screen",
      "Custom Overlays",
      "Professional Booth Attendant(s)"
    ],
  },
  {
    title: "Gold Packages",
    subtitle: "Customizable Booths tailored to your theme and vibe",
    price: "600",
    buttonText: "Book Now",
    buttonLink: "#",
    features: [
      "4 Hour Digital Photo Booth (Digital & Prints)",
      "Setup / Breakdown of Photobooth",
      "Media Delivered via Text, E-Mail, Airdrop or QR Code",
      "Unlimited Digital: GIFs, Boomerangs, Filters & Still Photos",
      "Premium Backdrop (Black or White)",
      "Custom LED Light Pattern / Color Choice",
      "Custom Tap to Start Screen",
      "Custom Overlays",
      "Premium Themed Props",
      "Unlimited High Quality 2x6 Prints",
      "Link to Live Gallery (sent within 24 hours)",
      "Professional Booth Attendant(s)"
    ],
  },
  {
    title: "Diamond Packages",
    subtitle: "Customizable Booths tailored to your theme and vibe",
    price: "900",
    buttonText: "Book Now",
    buttonLink: "#",
    features: [
      "5 Hour Digital Photo Booth (Digital & Prints)",
      "Setup / Breakdown of Photobooth",
      "Media Delivered via Text, E-Mail, Airdrop or QR Code",
      "Unlimited Digital: GIFs, Boomerangs, Filters & Still Photos",
      "Custom LED Light Pattern / Color Choice",
      "Custom Overlays",
      "Professional Studio Lighting",
      "Premium Themed Props",
      "Unlimited High Quality 4x6 Prints",
      "Link to Live Gallery (sent within 24 hours)",
      "Premium Customizable Backdrop",
      "Memory Scrapbook with Setup"
    ],
  },
]

export default function AllPackages() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pricingPackages.map((pkg, index) => (
        <PricingCard
          key={index}
          title={pkg.title}
          subtitle={pkg.subtitle}
          price={pkg.price}
          features={pkg.features}
          buttonText={pkg.buttonText}
          buttonLink={pkg.buttonLink}
          className={cn( pkg?.title !=="Diamond Packages" && "max-w-md bg-white text-black")}
          iconClass={cn( pkg?.title !=="Diamond Packages" && "text-primary-gold")}
          btnClass={cn( pkg?.title !=="Diamond Packages" && " bg-transparent border border-primary-gold  text-black hover:bg-[#a59a72] hover:text-white transition-colors")}
     

        />
      ))}
    </div>
  )
}

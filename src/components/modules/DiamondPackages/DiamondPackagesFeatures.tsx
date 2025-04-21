import PricingCard from "@/components/ui/pricing-card"

// Sample data array for packages
const pricingPackages = [
  {
    title: "Diamond Packages",
    subtitle: "Customizable Booths tailored to your theme and vibe",
    price: "900",
    buttonText: "Book Now",
    buttonLink: "#",
    features: [
      "5 Hour Digital Photo Booth (Digital & Prints)",
      "Setup / Breakdown of Photobooth",
      "Photos Delivered via Text, E-Mail, Airdrop or QR Code",
      "Unlimited Digital GIFs, Boomerangs, Filters and Photos",
      "Custom LED Light Pattern / Color Choice",
      "Custom Overlays",
    ],
  },
]

export default function DiamondPackagesFeatures() {
  return (
      <div className="w-fit mx-auto">
        {pricingPackages.map((pkg, index) => (
          <PricingCard
            key={index}
            title={pkg.title}
            subtitle={pkg.subtitle}
            price={pkg.price}
            features={pkg.features}
            buttonText={pkg.buttonText}
            buttonLink={pkg.buttonLink}
          />
        ))}
      </div>
   
  )
}

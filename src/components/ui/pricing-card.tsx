import Link from "next/link"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  subtitle: string
  price: string
  features: string[]
  buttonText: string
  buttonLink: string
}

export default function PricingCard({
  title,
  subtitle,
  price,
  features,
  buttonText = "Book Now",
  buttonLink = "#",
}: PricingCardProps) {
  return (
    <div className="rounded-lg overflow-hidden bg-[#AB9D6E] text-white max-w-sm">
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm opacity-90 mb-4">{subtitle}</p>
        <p className="text-3xl font-bold mb-4">${price}</p>

        <Link
          href={buttonLink}
          className="flex items-center justify-center w-full py-3 px-4 rounded-full bg-[#b8aa7e] border border-white text-white hover:bg-[#a59a72] transition-colors"
        >
          {buttonText} →
        </Link>

        <div className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 min-w-5 mt-0.5 text-white" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

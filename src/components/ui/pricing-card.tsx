import Link from "next/link"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  title: string
  subtitle: string
  price: string
  features: string[]
  buttonText: string
  buttonLink: string
  className?: string
  iconClass?:string
  btnClass?: string
}

export default function PricingCard({
  title,
  subtitle,
  price,
  features,
  buttonText = "Book Now",
  buttonLink = "#",
  className,
  iconClass,
  btnClass,
}: PricingCardProps) {
  return (
    <div className={cn("rounded-lg overflow-hidden bg-[#AB9D6E] text-white max-w-sm", className)}>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm opacity-90 mb-4">{subtitle}</p>
        <p className="text-3xl font-bold mb-4">${price}</p>

        <Link
          href={buttonLink}
          className={cn("flex items-center justify-center w-full py-3 px-4 rounded-full bg-[#b8aa7e]  border border-white text-white hover:bg-[#a59a72] transition-colors", btnClass)}
        >
          {buttonText} →
        </Link>

        <div className="mt-4 space-y-2">   
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className={cn("h-5 w-5 min-w-5 mt-0.5 text-white", iconClass)} />
              <span className="">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

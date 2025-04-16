import { Network, Triangle, Hexagon, FlowerIcon, CircleIcon, Workflow, Users } from "lucide-react"
import { FeatureCard } from "./FeatureCard"


// Define the feature data as an array of objects
const features = [
  {
    icon: Network,
    title: "Get Photos Instantly",
    description: "Email, Text Or Scan A QR Code To Get Your Photos On Your Phone Instantly.",
  },
  {
    icon: Triangle,
    title: "Portrait Quality Photo",
    description: "Studio lighting and professional camera makes you look stunning.",
  },
  {
    icon: Hexagon,
    title: "GIFs",
    description: "Spice Up Your Photos By Turning Them Into Fun Animated GIFs.",
  },
  {
    icon: FlowerIcon,
    title: "Unlimited Printing",
    description: "Your Choice Of 4x6 Photo Spread, 4x6 Single Photo, 2x6 Strips.",
  },
  {
    icon: CircleIcon,
    title: "Personalized Graphics",
    description: "Choose From Seasonal Graphics Or Get Totally Custom Graphics.",
  },
  {
    icon: Triangle,
    title: "Glam Filter",
    description: "Popularized By The Kardashians, Make Your Skin Look Flawless.",
  },
  {
    icon: Workflow,
    title: "Online Photo Gallery",
    description: "Share Your Online Gallery With Everyone.",
  },
  {
    icon: Users,
    title: "Friendly Team Members",
    description: "We're Excited To Party With You On Your Special Day.",
  },
]

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
      ))}
    </div>
  )
}

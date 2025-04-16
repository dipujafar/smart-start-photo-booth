import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center p-6 border border-primary-gold rounded-lg hover:bg-white duration-300">
      <div className="mb-4">
        <Icon className="w-12 h-12 stroke-1" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-center">{title}</h3>
      <p className="text-sm text-center text-muted-foreground">{description}</p>
    </div>
  )
}

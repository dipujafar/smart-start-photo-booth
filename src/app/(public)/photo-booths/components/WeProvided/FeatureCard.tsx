import { ReactNode } from "react";

interface FeatureCardProps {
  icon: () => ReactNode;
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center px-6 py-8 lg:py-10 border border-primary-gold rounded-lg hover:bg-white duration-300">
      <div className="mb-4">
        <Icon  />
      </div>
      <h3 className="mb-2 text-lg font-bold text-center">{title}</h3>
      <p className="text-sm text-center text-muted-foreground">{description}</p>
    </div>
  )
}

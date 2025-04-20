import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LondonPhotoQuickLiftNav() {
  return (
    <div className="w-full mt-2">
      <div>
        <div className="flex flex-col lg:space-y-4 space-y-2">
          <h2 className="lg:text-2xl text-xl font-bold text-zinc-800">Quick Lift:</h2>
          <div className="flex flex-wrap gap-2">
            <Button
              asChild
              variant="outline"
              className="rounded-full bg-[#AB9D6E] hover:bg-[#d0c0a0] text-white  hover:text-zinc-900 md:py-6"
            >
              <Link href="/about-us#why-choose-us">Why choose us?</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full bg-[#AB9D6E] hover:bg-[#d0c0a0] text-white  hover:text-zinc-900 md:py-6"
            >
              <Link href="/event#pricing">Pricing</Link>
            </Button>

        

            <Button
              asChild
              variant="outline"
              className="rounded-full bg-[#AB9D6E] hover:bg-[#d0c0a0] text-white  hover:text-zinc-900 md:py-6"
            >
              <Link href="/contact">Contact us</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full bg-[#AB9D6E] hover:bg-[#d0c0a0] text-white  hover:text-zinc-900 md:py-6"
            >
              <Link href="/#faq">FAQ</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

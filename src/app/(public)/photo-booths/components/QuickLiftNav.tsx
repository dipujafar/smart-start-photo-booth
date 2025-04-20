import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function QuickLiftNav() {
  return (
    <div className="w-full mt-5">
      <div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800">Quick Lift:</h2>
          <div className="flex flex-wrap gap-2">
            <Button
              asChild
              variant="outline"
              className="rounded-full bg-[#AB9D6E] hover:bg-[#d0c0a0] text-white border-[#c0b090] hover:border-[#d0c0a0] hover:text-zinc-900 py-6"
            >
              <Link href="#photo">Example Photos</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full bg-[#AB9D6E] hover:bg-[#d0c0a0] text-white  hover:text-zinc-900 py-6"
            >
              <Link href="/about-us#why-choose-us">Why choose us?</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full bg-[#AB9D6E] hover:bg-[#d0c0a0] text-white  hover:text-zinc-900 py-6"
            >
              <Link href="/event#pricing">Pricing</Link>
            </Button>

        

            <Button
              asChild
              variant="outline"
              className="rounded-full bg-[#AB9D6E] hover:bg-[#d0c0a0] text-white  hover:text-zinc-900 py-6"
            >
              <Link href="/contact">Contact us</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full bg-[#AB9D6E] hover:bg-[#d0c0a0] text-white  hover:text-zinc-900 py-6"
            >
              <Link href="/#faq">FAQ</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

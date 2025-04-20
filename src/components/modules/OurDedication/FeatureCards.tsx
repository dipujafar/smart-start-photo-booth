import SpinImage from "@/components/shared/SpinImage"
import flowerImage from "@/assets/icons/flowerIcon7.png"

export default function FeatureCards() {
    return (
      <div className="w-full bg-[#f8f5f0] py-12 px-4">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#faf7f2] rounded-xl p-8 flex flex-col items-center text-center border border-primary-gold">
            <div className="mb-6">
              <SpinImage image={flowerImage} className="h-auto w-auto"></SpinImage>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Every guest, every moment.</h3>
            <p className="text-gray-700">You’re worth our finest, so we consistently bring our vibrant best.</p>
          </div>
  
          {/* Card 2 */}
          <div className="bg-[#faf7f2] rounded-xl p-8 flex flex-col items-center text-center  border border-primary-gold">
            <div className="mb-6">
            <SpinImage image={flowerImage} className="h-auto w-auto"></SpinImage>
            </div>
            <h3 className="text-2xl font-semibold mb-3">We make dreams come true.</h3>
            <p className="text-gray-700">Your ideas, our commitment to make them happen.</p>
          </div>
  
          {/* Card 3 */}
          <div className="bg-[#faf7f2] rounded-xl p-8 flex flex-col items-center text-center  border border-primary-gold">
            <div className="mb-6">
            <SpinImage image={flowerImage} className="h-auto w-auto"></SpinImage>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Cherish your moments.</h3>
            <p className="text-gray-700">
              We're dedicated to preserving every smile, laugh, and moment of happiness at your celebration.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  
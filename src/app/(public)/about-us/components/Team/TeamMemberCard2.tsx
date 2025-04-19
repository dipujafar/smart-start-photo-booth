import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  imageUrl: string
}

export function TeamMemberCard2({ name, role, imageUrl }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative  overflow-hidden rounded-full lg:size-56 sm:size-44 size-32 ">
        <Image src={imageUrl} alt={`Photo of ${name}`} fill className="object-cover" />
      </div>
      <h3 className="md:mt-4 mt-2 text-center font-bold md:text-2xl  truncate">{name}</h3>
      <p className="text-center text-xs md:text-base text-gray-700">{role}</p>
    </div>
  )
}

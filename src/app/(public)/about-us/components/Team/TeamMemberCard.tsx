import Image from "next/image";
import borderImage from "@/assets/icons/borderIcon1.tsx.png";

interface TeamMemberProps {
  name: string;
  title: string;
  imageSrc: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, title, imageSrc }) => {
  return (
    <div className="flex flex-col  gap-y-3  ">
      <div className="relative">
        {/* Border Image - Placed underneath the main image */}
        <div className="absolute -top-2 -left-2 z-0">
          <Image src={borderImage} alt="border_image" />
        </div>

        {/* Main Image */}
        <Image
          src={imageSrc}
          alt={`${name}'s photo`}
          width={12000}
          height={12000}
          className="max-h-[800px] object-cover z-10"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold ">{name}</h3>
        <h4 className="text-lg text-gray-700 font-medium ">{title}</h4>
      </div>
    </div>
  );
};

export default TeamMemberCard;

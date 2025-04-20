import Sectiontitle from "@/components/shared/SectionTitle";
import SectiontitleSmall from "@/components/shared/SectionTitleSmall";
import Container from "@/components/shared/Container";
import TeamMemberCard from "./TeamMemberCard";

export default function Team() {
  return (
    <div className="bg-[#EADAC1]">
      <Container className=" py-12 2xl:w-[80%]">
        {/* header */}
        <div className="text-center mb-10 xl:mb-20 space-y-1 font-playfair" id="meet-team">
          <div className="relative w-full flex items-center justify-center text-center md:gap-x-6 gap-x-3 ">
            <div className="h-1 rounded-xl md:w-16 w-8 bg-linear-to-r from-[#AB9D6E] to-[#564920] "></div>
            <h2 className="text-2xl md:text-5xl font-semibold  mb-2 flex items-center justify-center ">
              Meet Our Team
            </h2>
            <div className="h-1 rounded-xl md:w-16 w-8 bg-linear-to-r from-[#AB9D6E] to-[#564920] "></div>
          </div>
          <p className="text-xl">
            Meet the wonderful people who make your events come to life!
          </p>
        </div>

        <div className="grid sm:grid-cols-2  gap-8 ">
          <TeamMemberCard
            name="Okezie"
            title="Founder"
            imageSrc="/teamMember1.png"
          />
          <TeamMemberCard
            name="Alexis Gbemudu"
            title="Team Leader"
            imageSrc="/teamMember2.png"
          />
        </div>

        <div className="mt-4 xl:mt-7 space-y-4 lg:text-xl">
          <h4 className="font-semibold">Founder bio:</h4>
          <p>
            Alexis & Okezie Onukwubiri are the founders of Smart Start Photo, a
            modern photo booth company dedicated to delivering unforgettable
            experiences for weddings, corporate events, and special
            celebrations. With a passion for creativity and an eye for detail,
            Alexis & Okezie launched the business to blend high-quality
            photography with sleek technology, offering clients a fun and
            stylish way to capture memories. Drawing on years of professional
            experience in event planning and customer service, Alexis & Okezie
            ensures each event is tailored, seamless, and truly memorable—from
            the first click to the final print.
          </p>
        </div>
      </Container>
    </div>
  );
}

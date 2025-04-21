import Container from "@/components/shared/Container";
import Sectiontitle from "@/components/shared/SectionTitle";
import flowerIcon1 from "@/assets/icons/flowericon1.png";
import flowerIcon2 from "@/assets/icons/flowericon2.png";
import Image from "next/image";
import FeatureCards from "./FeatureCards";

const OurDedication = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-8">
        <Image src={flowerIcon1} alt="flower_icon"></Image>
        <Sectiontitle title="Our Dedication"></Sectiontitle>
        <Image src={flowerIcon2} alt="flower_icon"></Image>
      </div>
      <FeatureCards></FeatureCards>
    </Container>
  );
};

export default OurDedication;

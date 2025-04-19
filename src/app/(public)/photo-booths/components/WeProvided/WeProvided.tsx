import Sectiontitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import flowerIcon3 from "@/assets/icons/flowericon3.png";
import { FeatureGrid } from "./FeatureGrid";
import Container from "@/components/shared/Container";
import FlowerSpain from "./FlowerSpain";
const WeProvided = () => {
  return (
    <Container className="lg:space-y-10 space-y-8">
      <div>
        <div className="flex justify-center items-center gap-x-8 flex-col lg:flex-row gap-y-5">
          <FlowerSpain></FlowerSpain>
          <div className="space-y-2">
            <Sectiontitle   title="What’s We Provided" id="weprovide"></Sectiontitle>
            <p className="text-center max-w-lg mx-auto">
              Per ipsum ultrices sollicitudin iaculis platea facilisi semper
              aliquam up senectus cursus vivamus volutpat penatibus
            </p>
          </div>
          <FlowerSpain></FlowerSpain>
        </div>
      </div>
      <FeatureGrid></FeatureGrid>
    </Container>
  );
};

export default WeProvided;

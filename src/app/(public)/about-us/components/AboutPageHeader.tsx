
import Container from "@/components/shared/Container";
import SectiontitleSmall from "@/components/shared/SectionTitleSmall";
import FlowerIconSpin from "./FlowerIconSpin";

const AboutPageHeader = () => {
  return (
    <Container>
      <div className="flex justify-center items-center gap-x-8 flex-col lg:flex-row gap-y-5">
        <FlowerIconSpin></FlowerIconSpin>
        <SectiontitleSmall title="About us" className="uppercase"></SectiontitleSmall>
        <FlowerIconSpin></FlowerIconSpin>
      </div>
      <h5 className="text-center lg:mt-5  mt-3 max-w-3xl mx-auto text-primary-gray font-medium">We bring fun, creativity, and unforgettable moments to your events with our custom photobooth experiences.</h5>
    </Container>
  );
};

export default AboutPageHeader;

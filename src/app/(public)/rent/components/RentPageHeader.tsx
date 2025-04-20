import SpinIcons from "./SpinIcons";
import Container from "@/components/shared/Container";
import SectiontitleSmall from "@/components/shared/SectionTitleSmall";

const RentPageHeader = () => {
  return (
    <Container>
      <div className="flex justify-center items-center gap-x-8 flex-col lg:flex-row gap-y-5">
        <SpinIcons></SpinIcons>
        <div>
          <SectiontitleSmall title="Rent Or Purchased "></SectiontitleSmall>
          <SectiontitleSmall title="An Elegant Backdrop"></SectiontitleSmall>
        </div>

        <SpinIcons></SpinIcons>
      </div>
      <h5 className="text-center lg:mt-5  mt-3 max-w-xl mx-auto text-primary-gray">
        The charm of Your Party lies in its flexibility – you can choose to keep
        your backdrop minimalistic or go as wild and extravagant as you wish!
      </h5>
    </Container>
  );
};

export default RentPageHeader;

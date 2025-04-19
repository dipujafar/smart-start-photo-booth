import BorderIcon from "@/components/ui/border-icon";
import PhotoBoothPromo from "./PhotoBoothPromo";
import WeProvided from "./WeProvided/WeProvided";
import RentalProcessStepper from "./RentalProcessStepper";
import Packages from "./Packages/Packages";
import PopularCustomizations from "./PopularCustomizations";
import StudioPhotos from "./StudioPhotos/StudioPhotos";
import PromoVideo from "./PromoVideo";
import Container from "@/components/shared/Container";

const PhotoBoothPageContainer = () => {
  return (
    <div className="xl:space-y-16 md:space-y-10 space-y-8">
      <Container className="flex  justify-betweenl flex-col-reverse lg:flex-row">
        <PhotoBoothPromo></PhotoBoothPromo>
        <PromoVideo></PromoVideo>
      </Container>
      <BorderIcon></BorderIcon>
      <RentalProcessStepper />
      <Packages></Packages>
      <PopularCustomizations></PopularCustomizations>
      <BorderIcon></BorderIcon>
      <StudioPhotos></StudioPhotos>
      <WeProvided></WeProvided>
      <BorderIcon></BorderIcon>
    </div>
  );
};

export default PhotoBoothPageContainer;

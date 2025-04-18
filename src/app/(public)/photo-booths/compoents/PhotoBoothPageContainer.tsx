import BorderIcon from "@/components/ui/border-icon";
import PhotoBoothPromo from "./PhotoBoothPromo";
import WeProvided from "./WeProvided/WeProvided";
import RentalProcessStepper from "./RentalProcessStepper";
import Packages from "./Packages/Packages";
import PopularCustomizations from "./PopularCustomizations";
import StudioPhotos from "./StudioPhotos/StudioPhotos";


const PhotoBoothPageContainer = () => {
  return (
    <div className='xl:space-y-16 md:space-y-10 space-y-8'>
      <PhotoBoothPromo></PhotoBoothPromo>
      <BorderIcon></BorderIcon>
      <RentalProcessStepper />
      <Packages></Packages>
      <PopularCustomizations></PopularCustomizations>
      <BorderIcon></BorderIcon>
      {/* <StudioPhotos></StudioPhotos> */}
      <WeProvided></WeProvided>
      <BorderIcon></BorderIcon>
    </div>
  );
};

export default PhotoBoothPageContainer;

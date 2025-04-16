import BorderIcon from "@/components/ui/border-icon";
import PhotoBoothPromo from "./PhotoBoothPromo";
import WeProvided from "./WeProvided/WeProvided";

const PhotoBoothPageContainer = () => {
  return (
    <div className='xl:space-y-16 md:space-y-10 space-y-8'>
      <PhotoBoothPromo></PhotoBoothPromo>
      <BorderIcon></BorderIcon>
      <WeProvided></WeProvided>
    </div>
  );
};

export default PhotoBoothPageContainer;

import React from "react";
import RentPageHeader from "./RentPageHeader";
import { PreviewItems } from "./PreviewItems";
import BorderIcon from "@/components/ui/border-icon";
import PhotoBoothExperience from "@/components/modules/PhotoBoothExperience/PhotoBoothExperience";

const RentPageContainer = () => {
  return (
    <div className="xl:space-y-16 md:space-y-10 space-y-8">
      <RentPageHeader></RentPageHeader>
      <div className="mt-[120px]">
        <PreviewItems></PreviewItems>
      </div>

      <BorderIcon></BorderIcon>
      <PhotoBoothExperience></PhotoBoothExperience>
    </div>
  );
};

export default RentPageContainer;

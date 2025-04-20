import BorderIcon from "@/components/ui/border-icon";
import React from "react";
import Pricing from "./Pricing";
import { BoothAppears } from "./BoothAppears";
import Connect from "./Connect";
import OurDedication from "@/components/modules/OurDedication/OurDedication";
import Container from "@/components/shared/Container";
import LondonPhotoBoothPromo from "./LondonPhotoBoothPromo";
import LondonPromoVideo from "./LondonPromoVideo";

const EventPageContainer = () => {
  return (
    <div className="xl:space-y-16 md:space-y-10 space-y-8">
      <Container className="flex  justify-betweenl flex-col-reverse lg:flex-row gap-x-5 gap-y-5">
        <div className="flex-1">
          <LondonPhotoBoothPromo></LondonPhotoBoothPromo>
        </div>
        <div className="flex-1">
          <LondonPromoVideo></LondonPromoVideo>
        </div>
      </Container>

      <BorderIcon></BorderIcon>
      <Pricing></Pricing>
      <BorderIcon></BorderIcon>
      <div className="mt-[120px]">
        <BoothAppears></BoothAppears>
      </div>
      <BorderIcon></BorderIcon>
      <Connect></Connect>
      <BorderIcon></BorderIcon>
      <OurDedication></OurDedication>
    </div>
  );
};

export default EventPageContainer;

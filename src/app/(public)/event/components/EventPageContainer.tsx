import BorderIcon from "@/components/ui/border-icon";
import React from "react";
import Pricing from "./Pricing";
import { BoothAppears } from "./BoothAppears";
import Connect from "./Connect";
import OurDedication from "@/components/modules/OurDedication/OurDedication";

const EventPageContainer = () => {
  return (
    <div className="xl:space-y-16 md:space-y-10 space-y-8">
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

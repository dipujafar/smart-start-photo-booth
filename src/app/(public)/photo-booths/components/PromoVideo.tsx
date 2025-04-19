import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import React from "react";

const PromoVideo = () => {
  return (
    <div className="relative">
      <video
        src={"/photoBoothVideo.mp4"}
        autoPlay
        loop
        muted
        className="rounded-3xl"
      ></video>

      <div className="absolute inset-0 flex justify-center items-center">
        <Button className="py-10 bg-[#AB9D6E] rounded-full text-xl">
          <div className="p-2 bg-white rounded-full">
            <Play  color="black" fill="#000"></Play>
          </div>
          Smart Networking Hub{" "}
        </Button>
      </div>
    </div>
  );
};

export default PromoVideo;

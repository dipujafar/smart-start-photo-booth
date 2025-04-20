"use client"
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import React, { useState } from "react";
import ShowModalVideo from "./ShowModalVideo";

const LondonPromoVideo = () => {
    const [showVideo, setShowVideo] = useState(false)
  return (
    <div className="relative">
      <video
        src={"/LondonPhotoBoothVideo.mp4"}
        autoPlay
        loop
        muted
        className="rounded-3xl w-full"
      ></video>

      <div className="absolute inset-0 flex justify-center items-center">
        <Button className="py-7 px-5 bg-[#AB9D6E] rounded-full text-xl cursor-pointer" onClick={()=>setShowVideo(true)}>
          <div className="p-1 bg-white rounded-full">
            <Play size={18}  color="black" fill="#000"></Play>
          </div>
         See It
        </Button>
      </div>

      <ShowModalVideo open={showVideo} setOpen={setShowVideo}></ShowModalVideo>
    </div>
  );
};

export default LondonPromoVideo;

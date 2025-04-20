import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";


const ShowModalVideo = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogContent className="w-full border-none shadow-none bg-transparent md:left-[40%] lg:left-[45%]">
      <iframe className="md:w-[600px] md:h-[600px] h-[300px] rounded-lg" src="https://www.youtube.com/embed/Jv8ZEwCIjy8" title="S&amp;W Wedding w/ Festoons and Flourishes • London Phone Booth Rental" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //@ts-ignore
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default ShowModalVideo;

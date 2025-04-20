import {
    Dialog,
    DialogContent,
  } from "@/components/ui/dialog";
  import { Dispatch, SetStateAction } from "react";
  
  
  const ShowPromoVideo = ({
    open,
    setOpen,
  }: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  }) => {
    return (
      <Dialog open={open} onOpenChange={setOpen} >
        <DialogContent className="w-full border-none shadow-none bg-transparent md:left-[40%] lg:left-[45%]">
        <iframe className="md:w-[600px] md:h-[600px] h-[300px] rounded-lg" src="https://www.youtube.com/embed/FSp43XcNIgs" title="Meet the Pro Photo Booth" 
        // @ts-ignore
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default ShowPromoVideo;
  
"use client"
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react"; 
import { cn } from "@/lib/utils";


const SpinImage = ({image, className}: {image: StaticImageData, className?: string}) => {
    return (
        <motion.div
        animate={{ rotate: 360 }} // Rotate 360 degrees
        transition={{
            repeat: Infinity, // Infinite repetition
            repeatType: "loop", // Looping the animation
            duration: 16, // Duration for a full rotation
            ease: "linear", // Smooth linear transition
        }}
    >
        <Image src={image} alt="flower_icon" className={cn("w-20 h-20", className)} /> {/* Adjust size accordingly */}
    </motion.div>
    );
};

export default SpinImage;
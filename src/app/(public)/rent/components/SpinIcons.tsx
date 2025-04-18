"use client"
import flowerIcon from "@/assets/icons/flowerImage4.png";
import Image from "next/image";
import { motion } from "motion/react"; 


const SpinIcons = () => {
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
        <Image src={flowerIcon} alt="flower_icon" className="w-20 h-20" /> {/* Adjust size accordingly */}
    </motion.div>
    );
};

export default SpinIcons;
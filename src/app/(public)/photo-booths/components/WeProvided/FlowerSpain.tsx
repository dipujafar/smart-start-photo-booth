"use client"
import flowerIcon3 from "@/assets/icons/flowericon3.png";
import Image from "next/image";
import { motion } from "motion/react"; 

const FlowerSpain = () => {
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
            <Image src={flowerIcon3} alt="flower_icon" className="w-20 h-20" /> {/* Adjust size accordingly */}
        </motion.div>
    );
};

export default FlowerSpain;

import { motion } from "motion/react";
const HeroContent = () => {
  return (
    <motion.div initial={{opacity:0, y:"-10%"}} whileInView={{opacity:1, y:0}} animate={{rotate: 180}}>
      <motion.h1 initial={{opacity:0, y:"-10%"}} whileInView={{opacity:1, y:0}} transition={{duration: "0.8"}} className="xl:text-8xl lg:text-6xl text-4xl   max-w-xl text-center font-bold font-playfair">
        Smart Start PhotoBooth
      </motion.h1>
      <h1 className="xl:text-2xl text-xl max-w-xl text-center font-semibold ">
        Sharpshooters of the Photobooth World
      </h1>
    </motion.div>
  );
};

export default HeroContent;

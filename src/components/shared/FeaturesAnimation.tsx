import { childrenVariants, parentVariants } from "@/animation/FramerMotionValiants";
import {motion} from "motion/react"
const FeaturesAnimation = ({data}: {data:any}) => {
    return (
        <motion.div
      
        className="overflow-hidden"
      >
        <motion.div
          variants={parentVariants}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {data?.map((type:any) => (
            <motion.div
              variants={childrenVariants}
              key={type?._id}
              className="flex items-center space-x-3"
            >
              {/* <Checkbox id={type?.value} className="border-primary-gray" /> */}
              <label
                htmlFor={type?.value}
                className=" text-primary-gray leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg"
              >
                {type?.label}
              </label>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    );
};

export default FeaturesAnimation;
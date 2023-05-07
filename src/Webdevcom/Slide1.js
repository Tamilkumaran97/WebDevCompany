
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../Varient.js";
import Image from "./WhatsApp_Image_2023-04-30_at_01.59.00-removebg-preview.png";

const Slide1 = () => {
  return (
    <>
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: -10 }}
        transition={{ delay: 2, type: "spring" }}
        className="absolute z-10 -mt-20 "
      >
        <img className="w-[200px] " src={Image} alt="img" />
      </motion.div>
      <div>
        <motion.div
          variants={fadeIn("down", 3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="absolute flex justify-center items-center"
        >
          <div className="absolute container p-10 w-80 h-80 rounded-full top-10  bg-yellow-300"></div>
        </motion.div>

        <motion.div
          initial={{ y: -400 }}
          animate={{ y: 0 }}
          transition={{ delay: 5, type: "tween", duration: 1 }}
          className="absolute left-[1200px]  container p-10 w-80 h-80 rounded-full top-10  bg-orange-500"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 5 }}
          className="relative flex justify-center items-center mt-52 shadow-sm shadow-black  bg-cyan-500 rounded-xl"
        >
          <div className="">
            <motion.h1
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="p-5 text-6xl font-bold "
            >
              We are Web Developer's
            </motion.h1>
            <div>
              <motion.div
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex justify-center mb-4  text-5xl text-cyan-800"
              >
                <TypeAnimation
                  sequence={[
                    ` Highly Positive...`,
                    1000,
                    `Extensive Experience...`,
                    1000,
                    `Highly Enthusiastic...`,
                    1000,
                  ]}
                  speed={50}
                  className=""
                  repeat={Infinity}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="flex justify-center items-center"
        >
          <motion.div>
            initial={{ x: +2500 }}
            animate={{ x: 10 }}
            transition={{ delay: 5, type: "spring", stiffness: 120 }}
            <a
              href="/"
              className="bg-cyan-400 p-2 px-5 rounded-xl mt-8 shadow hover:shadow-orange-500 hover:bg-cyan-500 "
            >
              Get started
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
export default Slide1;

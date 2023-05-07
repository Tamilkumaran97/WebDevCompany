import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../Varient.js";
import Image from "./WhatsApp_Image_2023-04-30_at_01.59.00-removebg-preview.png";
import videoBg from "./pexels-enrique-hoyos-3571264-3840x2160-30fps.mp4";

const Home = () => {
  return (
    <section>
      <video
        className="fixed w-screen h-screen lg:w-screen lg:h-screen object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      ></video>
      <div className="p-2 lg:px-10">
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: -10 }}
          transition={{ delay: 2, type: "spring" }}
          className="absolute z-10 mt-[182px] lg:mt-28"
        >
          <img className=" w-[100px] lg:w-[200px] " src={Image} alt="img" />
        </motion.div>
        <div>
          <motion.div
            initial={{ y: 450 }}
            animate={{ y: 0 }}
            transition={{ delay: 5, type: "tween", duration: 1 }}
            className="absolute flex justify-center items-center"
          >
            <div className="absolute container p-10 w-40 h-40 lg:w-80 lg:h-80 rounded-full top-10  bg-yellow-300"></div>
          </motion.div>

          <motion.div
            initial={{ y: -400 }}
            animate={{ y: 0 }}
            transition={{ delay: 5, type: "tween", duration: 1 }}
            className="absolute lg:left-[1200px] left-[400px] mt-24 lg:mt-1 container p-10 w-40 h-40 lg:w-80 lg:h-80  rounded-full top-10  bg-orange-500"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 5 }}
            className="relative flex justify-center items-center mt-52  shadow-md shadow-black backdrop-blur-sm"
          >
            <div className="">
              <motion.h1
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="p-3 text-2xl  lg:text-6xl font-bold "
              >
                We are Web Developer's
              </motion.h1>
              <div>
                <motion.div
                  variants={fadeIn("down", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="flex justify-center mb-3 lg:mb-4 text-xl  lg:text-5xl text-black"
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
            <motion.a
              initial={{ x: +2500 }}
              animate={{ x: 10 }}
              transition={{ delay: 5, type: "spring", stiffness: 120 }}
              href="/nav"
              className=" p-2 px-5 rounded-xl mt-8 shadow-lg shadow-black font-bold backdrop-blur-lg "
            >
              Get started
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;

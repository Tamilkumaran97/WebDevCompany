import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Img from "./img2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../Varient";
import Img1 from "./insta.png";

import Img3 from "./quotes-removebg-preview.png";
import Transition from "./Transition";

const Home1 = () => {
  const [isopen, setIsOpen] = useState(false);

  return (
    <section>
      <Transition />
      <div id="Home" className=" container ">
        <div className="container mx-auto ">
          {/**Divided into three container */}
          <div className=" lg:flex -mt-28">
            {/**First container */}
            <div className=" text-center mr-14  mt-32 lg:mr-0 lg:w-1/3 lg:mt-80  ">
              <motion.h1
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className=" lg:text-3xl font-bond ml-16 "
              >
                <h1 className="font-bold text-2xl dark:text-black lg:text-3xl">Hey there,</h1>
                <span className="text-white dark:text-black  text-2xl font-semibold">
                  I'm
                </span>{" "}
                <span className="text-2xl dark:text-black">
                  <TypeAnimation
                    sequence={[
                      ` Greebloo,`,
                      2000,
                      `a Frontend developer,`,
                      2000,
                      `a Designer,`,
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </motion.h1>
              <div className="">
                <motion.p
                  variants={fadeIn("right", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="dark:text-gray-500 lg:text-lg font-semibold ml-16"
                >
                  "Building Your Digital Success with Custom Web Solution"
                </motion.p>
              </div>
            </div>

            {/**second container Images */}
            <motion.div className="   relative lg:w-1/3  ">
              <div className="flex justify-center items-center mt-4 lg:mt-52 ">
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="absolute "
                >
                  <img
                    className="w-[360px] lg:w-[720px] opacity-50   "
                    src={Img1}
                    alt=""
                  />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 1.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="relative"
                >
                  <img
                    className="w-[300px] lg:w-[350px] rounded-full dark:drop-shadow-[0_35px_35px_rgb(0,0,0)]  drop-shadow-[0_35px_35px_rgb(255,255,0)] duration-1000 hover:scale-110 cursor:pointer"
                    src={Img}
                    alt=""
                  />
                </motion.div>
              </div>
            </motion.div>

            {/**Third container with about */}
            <div className="-mt-24  lg:w-1/3 lg:mt-16 ">
              <motion.h1
                variants={fadeIn("left", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="font-semibold text-center text-lg  lg:text-lg mt-40 lg:mt-48 lg:mr-8"
              >
                "Design is not just what it look like its feel like."
              </motion.h1>

              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mt-5 mr-16"
              >
                <div className="ml-16 lg:ml-6 rounded">
                  <motion.div
                    transition={{ layout: { duration: 1, type: "spring" } }}
                    layout
                    style={{ borderRadius: `1rem` }}
                    onClick={() => setIsOpen(!isopen)}
                    className=" backdrop-blur-lg cursor-pointer hover:bg-black/40 bg-black/20  p-5 rounded font-semibold   "
                  >
                    <motion.h2
                      layout="position"
                      className="font-bold text-center"
                    >
                      About Me
                    </motion.h2>
                    {isopen && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center z-50 flex flex-warp w-[300px] mx-auto  pt-2 text-sm"
                      >
                        "Passionate , driven , and always eager to learn - I am
                        dedicated to making a positive impact and bringing my
                        best to every opportunity. With a strong work ethic and
                        willingness to take on new challenges, I am excited to
                        bring my unique skills and perspectives to your team.
                        Let's work together to create something amazing"
                      </motion.p>
                    )}
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex justify-center items-center lg:mr-10 mt-4 gap-4"
              >
                <a
                  className="bg-black/60 hover:bg-black text-white rounded-lg  p-2"
                  href="/"
                >
                  Contact us
                </a>
                <a
                  className="bg-cyan-500 dark:bg-gray-500 dark:hover:bg-gray-800 hover:bg-cyan-600 text-white rounded-lg  p-2"
                  href="/"
                >
                  Hire Me
                </a>
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                {isopen ? (
                  ""
                ) : (
                  <div className=" ml-32   lg:ml-24">
                    <img className="w-[200px] dark:drop-shadow-[0_35px_35px_rgb(0,255,255)] " src={Img3} alt="" />
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home1;

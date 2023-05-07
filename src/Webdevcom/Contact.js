import React from "react";
import Image from "./rem.png";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { fadeIn } from "../Varient";
import Transition from "./Transition";

const Contact = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <section className="dark:bg-transparent bg-gray-400 p-10 text-gray-900 mt-5  rounded" id="link">
      <Transition/>
      <div className="container mx-auto ">
        <div className="lg:flex flex-warp ">
          <div className="  lg:w-1/2 lg:pl-12  ">
            <div className="">
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.18}
                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                whileTap={{ cursor: "grabbing" }}
                className="relative cursor-grab  lg:w-[450px] lg:h-[400px] rounded-xl dark:bg-black/50 bg-orange-500 "
              >
                <div className="p-5 dark:text-white ">
                  <h1 className="text-3xl  font-bold mt-10 ">Greebloo</h1>
                  <p className="">
                    “Do what you can, with what you have, where you are.”
                    ―Theodore Roosevelt.
                  </p>
                  <p>Design is just feel just fee it</p>
                  <p className="mt-32">Never be looser!</p>
                  <p className="">Drag Me!!!!!</p>
                </div>

                <motion.div
                  variants={fadeIn("right", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  style={{ x, y, rotateX, rotateY, z: 100000 }}
                >
                  <img
                    className="absolute  w-[300px] -top-72 -right-5 drop-shadow-[0_35px_35px_rgb(0,255,225)]  dark:drop-shadow-[0_35px_35px_rgb(0,0,0)]
                 "
                    src={Image}
                    draggable="false"
                    alt=""
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-auto mx-auto  lg:w-1/2 lg:pr-12  "
          >
            <div className="mt-24">
              <h2 className="text-5xl dark:text-white/50 uppercase">Subscribe to our Channel Greebloo</h2>
              <p className="mt-4 dark:text-white/50 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur vero est deserunt voluptates facilis. Possimus et,
                ea iusto tempore vel dignissimos modi distinctio quas, labore
                ducimus deserunt delectus odit esse.
              </p>
              <div className=" mt-12">
                <form
                  className=""
                  action="
                  "
                >
                  <div className="flex border bg-white p-2 rounded focus-within:border-purple-500">
                    <div className="w-auto flex px-2 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 my-auto"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                    </div>
                    <div className="w-full ">
                      <span className="block text-gray-400">
                        Enter Your Name
                      </span>
                      <input
                        className="w-full  p-1 focus:outline-none border-b"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="mt-3 flex border bg-white p-2 rounded focus-within:border-purple-500">
                    <div className=" w-auto flex px-2 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="my-auto w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <span className="block text-gray-400">Email</span>
                      <input
                        className="w-full p-1 focus:outline-none border-b"
                        type="text"
                        placeholder="example@example.com"
                      />
                    </div>
                  </div>
                  <div className="mt-5 ">
                    <input className="mr-2" type="checkbox" required /> I agree
                    <button className="block w-full md:w-auto mt-3 font-semibold text-white bg-purple-600 rounded px-3 py-2">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

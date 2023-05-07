import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fadeIn } from "../Varient";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Transition from "./Transition";

const About = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="">
      <Transition/>
      <div
        id="About"
        className="dark:bg-transparent bg-[#00cecb] h-64  lg:mt-24 w-full rounded-t-xl "
      >
        {/**About */}
        <div className="flex flex-warp  ">
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" text-center mt-12 lg:mt-2 p-5 lg:p-20 lg:mx-40 h-1/2 "
          >
            <h className="  text-2xl  lg:text-4xl font-bold uppercase  shadow-md shadow-black duration-500 hover:bg-black/20 rounded-xl p-2 ">
              Our Projects
            </h>

            <p className=" mt-5  lg:text-xl">
              Welcome to our web development company ! We take pride in
              designing and developing high-quality website for businesses of
              all sizes and industries. Here are some of our recent projects:
            </p>
          </motion.div>
        </div>
      </div>

      {/**Scroll Bar */}
      <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="overflow-hidden dark:bg-transparent bg-[#00cecb]  "
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 5, left: -width }}
          className="flex gap-6 dark:bg-transparent bg-[#00cecb] p-6 lg:p-6  "
        >
          <motion.div className=" w-1/4  h-[15rem] lg:h-[17rem]   min-w-[22rem] lg:min-w-[30rem]  shadow-lg shadow-black p-5 duration-500 hover:bg-red-500   bg-red-800 rounded-lg cursor-grab ">
            <h1 className="font-bold text-xl lg:text-3xl  lg:p-2 rounded-full w-14 bg-black text-white text-center">
              1
            </h1>

            <h2 className="font-bold text-lg lg:text-2xl mt-5 mb-2">
              ABC Corporation:
            </h2>
            <p className="text-sm lg:text-base ">
              We designed a responsive website for this B2B company that provide
              software solution to health care provides. The website includes
              easy-to-use navigation, and a content management system that
              allows the client to make update and manage their content.
            </p>
          </motion.div>
          <motion.div className=" w-1/4 h-[15rem] lg:h-[17rem]   min-w-[22rem]  lg:min-w-[30rem]   shadow-lg shadow-black p-5 duration-500  hover:bg-green-500   bg-green-800 rounded-lg cursor-grab ">
            <h1 className="font-bold text-xl lg:text-3xl  lg:p-2 rounded-full w-14 bg-black text-white text-center">
              2
            </h1>
            <h1 className="font-bold text-lg lg:text-2xl mt-5 mb-2">
              XYZ Non-Profit:
            </h1>
            <p className="text-sm lg:text-base ">
              For this non-profit organization, we created a custom website that
              is optimized for fundraising and engagement. The website includes
              an integrated donation system, event registration forms, and a
              blog for sharing updates and news.
            </p>
          </motion.div>
          <motion.div className="w-1/4  h-[15rem] lg:h-[17rem]   min-w-[22rem] lg:min-w-[30rem]   shadow-lg shadow-black p-5 duration-500  hover:bg-yellow-500   bg-yellow-800 rounded-lg cursor-grab">
            <h1 className="font-bold text-xl lg:text-3xl  lg:p-2 rounded-full w-14 bg-black text-white text-center">
              3
            </h1>
            <h1 className="font-bold text-lg lg:text-2xl mt-5 mb-2">
              DEF E-commerce:
            </h1>
            <p className="text-sm lg:text-base ">
              We developed an e-commerce website for this online retailer that
              specializes in fashion and accessories. The website features a
              user-friendly shopping cart, advanced search functionality, and a
              mobile-responsive design to accommodate customers on-the-go.
            </p>
          </motion.div>
          <motion.div className=" w-1/4  h-[15rem] lg:h-[17rem]   min-w-[22rem] lg:min-w-[30rem]   shadow-lg shadow-black p-5 duration-500  hover:bg-orange-500   bg-orange-800 rounded-lg cursor-grab ">
            <h1 className="font-bold text-xl lg:text-3xl  lg:p-2 rounded-full w-14 bg-black text-white text-center">
              4
            </h1>
            <h1 className="font-bold text-lg lg:text-2xl mt-5 mb-2">
              GHI Professional services:
            </h1>
            <p className="text-sm lg:text-base ">
              Our team designed and developed a website for this B2B
              professional services firm that provides consulting and training
              to businesses. The website features a simple and sleek design, a
              custom contact form, and clear calls-to-action throughout the
              site.
            </p>
          </motion.div>
          <motion.div className=" w-1/4  h-[15rem] lg:h-[17rem]  min-w-[22rem]  lg:min-w-[30rem]   shadow-lg shadow-black p-5 duration-500  hover:bg-blue-500   bg-blue-800 rounded-lg cursor-grab">
            <h1 className="font-bold text-xl lg:text-3xl  lg:p-2 rounded-full w-14 bg-black text-white text-center">
              5
            </h1>
            <h1 className="font-bold text-lg lg:text-2xl mt-5 mb-2">
              GHI Professional services:
            </h1>
            <p className="text-sm lg:text-base ">
              Our team designed and developed a website for this B2B
              professional services firm that provides consulting and training
              to businesses. The website features a simple and sleek design, a
              custom contact form, and clear calls-to-action throughout the
              site.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="flex mx-auto dark:bg-transparent bg-[#00cecb]  rounded-b-xl  h-16">
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" flex"
        >
          <h1 className="flex ml-8 p-2 lg:p-5  text-xl mr-4 lg:-mt-3  lg:text-xl font-bold hover:scale-105 rounded-xl  cursor-pointer ">
            {new Date().getDate()}- {new Date().getMonth()} - {new Date().getFullYear()} </h1>
            <p className="flex jus text-center text-2xl gap-6 lg:text-3xl lg:gap-52 ">
            &copy;Greebloo <AiFillInstagram className="mt-1 duration-500 cursor-pointer hover:scale-125  " /> <AiFillFacebook  className="mt-1 duration-500 cursor-pointer hover:scale-125 "/> <AiFillGithub className="mt-1 duration-500 cursor-pointer hover:scale-125  " />{" "}
              <AiOutlineWhatsApp className="mt-1 duration-500 cursor-pointer hover:scale-125  " />{" "}
            </p>
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 

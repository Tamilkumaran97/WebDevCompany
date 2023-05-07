import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../Varient";
import Img1 from "./annima.jpeg";
import Img2 from "./webdevp.webp";
import Img3 from "./edevelo.png";
import Img4 from "./mappp.png";
import Img5 from "./update.jpg";
import Img6 from "./seone.jpg";
import Transition from "./Transition";

const Services = () => {
  const [selected, setSelected] = useState(null);

  const items = [
    {
      id: 1,
      title: "Website Design:",
      paragraph: `We create custom-designed websites that are visually appealing, user-friendly, and optimized for search engines...........`,
      image: Img1,
    },
    {
      id: 2,
      title: "Website Development:",
      paragraph: `Our team of experienced developers uses the latest technologies to develop fast, secure, and responsive websites..........`,
      image: Img2,
    },
    {
      id: 3,
      title: "E-Development:",
      paragraph: `We help businesses set up online stores and provide them with all the tools they need to sell their products or services online......`,
      image: Img3,
    },

    {
      id: 4,
      title: "Mobile App Development:",
      paragraph: `We help businesses set up online stores and provide them with all the tools they need to sell their products or services online........`,
      image: Img4,
    },

    {
      id: 5,
      title: "Website Maintenance:",
      paragraph: `We provide ongoing maintenance and support services to ensure that our clients' websites are always up-to-date, secure, and functioning smoothly........ `,
      image: Img5,
    },

    {
      id: 6,
      title: "SEO Services:",
      paragraph: `Our team of SEO experts uses proven strategies to improve our clients' website rankings in search engine results pages, driving more traffic to their site.........
    `,
      image: Img6,
    },
  ];

  return (
    <>
      <Transition />
      <div id="ser" className="dark:bg-transparent bg-[#c2e812] rounded-xl   mt-2">
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center lg:mx-32 p-8 lg:p-10"
        >
          <h1 className="text-3xl font-bold uppercase mx-24 lg:mx-96 duration-500 hover:bg-black/20 cursor-pointer rounded-xl p-2 shadow-lg shadow-black">
            {" "}
            Services
          </h1>
          <p className="flex-warp text-lg mt-4 lg:mt-2">
            Welcome to our web development company! We provide a range of
            services to help businesses establish a strong online presence and
            reach their target audience through their website. Our services
            include:
          </p>
        </motion.div>

        <div className="container mx-auto lg:flex lg:flex-wrap justify-center  pb-16">
          {items.map((data) => (
            <div className=" p-4 lg:w-1/3 lg:p-5 ">
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                whileHover={{
                  scale: 1.025,
                  transition: {
                    duration: 0.2,
                  },
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => {
                  setSelected(data);
                }}
                className="dark:bg-gray-800/40 bg-yellow-500 shadow-xl shadow-black/20 hover:shadow-green-500 hover:shadow-2xl p-10 rounded-xl cursor-pointer text-center "
                key={data.id}
              >
                <h1 key={data.id} className="text-xl  mb-3 font-bold">
                  {data.title}
                </h1>

                <p className="mb-6" key={data.id}>
                  {data.paragraph}{" "}
                </p>
                <button className="dark:bg-black/30 bg-[#c2e812] px-8 py-1 rounded-xl font-semibold hover:bg-black/20 duration-500 ">
                  Open
                </button>
              </motion.div>

              <div>
                {!selected ? (
                  ""
                ) : (
                  <motion.div
                    onClick={() => setSelected(null)}
                    className="fixed inset-0 bg-black/10 z-50 cursor-pointer flex justify-center items-center"
                  >
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="w-[700px]  rounded-xl p-10 overflow-hidden backdrop-blur-lg"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 0.95 }}
                        transition={{
                          duration: 0.5,
                        }}
                        layoutId={`card-${selected.id}`}
                      >
                        <img
                          className="bg-no-repeat"
                          src={selected.image}
                          alt=""
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;

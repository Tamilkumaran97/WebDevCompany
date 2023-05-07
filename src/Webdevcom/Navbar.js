import React from "react";
import Pic from "./WhatsApp Image 2023-05-04 at 04.45.46.jpg";
import { BiSearchAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import Home1 from "./Home1";
import { Link } from "react-scroll";
import { useState } from "react";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import {
  IoCloseSharp,
  
} from "react-icons/io5";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Transition from "./Transition";
import useTheme from "./useTheme";

const Navbar = () => {
  const [nextTheme ,setTheme ] = useTheme();

  const [open, setOpen] = useState(false);
  const showMenu = () => {
    setOpen(!open);
  };

  const [menu, setMenu] = useState(false);
  const menuShow = () => {
    setMenu(!menu);
  };

  return (
    <section className="">
      <Transition />
      {/**Onclick event */}

      <div>
        {menu ? (
          <div className="lg:hidden fixed z-50">
            {}
            <IoCloseSharp
              onClick={menuShow}
              size={35}
              className="mt-7 mb-5 ml-[427px] duration-500 hover:scale-110  hover:bg-black bg-black/40  rounded-xl cursor-pointer text-white"
            />
            <div className="  z-50 p-  mx-auto w-screen h-screen mr-4  bg-white/30 backdrop-blur-xl rounded-lg font-bold text-black flex-col flex   gap-6 items-center cursor-pointer  ">
              <Link
                href="./Home1"
                to="Home"
                className="mt-24 hover:border-b-black hover:border-b-2 text-2xl"
              >
                Home
              </Link>
              <Link
                to="About"
                className="hover:border-b-black hover:border-b-2 text-2xl"
              >
                Projects
              </Link>
              <Link
                to="ser"
                className="hover:border-b-black hover:border-b-2 text-2xl"
              >
                Services
              </Link>
              <Link
                onClick={showMenu}
                className="cursor-pointer hover:border-b-black hover:border-b-2   text-2xl"
              >
                About
              </Link>
              {!open ? (
                ""
              ) : (
                <motion.div>
                  <ul className="bg-black/20 rounded p-4 ml- ">
                    <li className="hover:border-b-4 rounded-sm  hover:border-black/50">
                      Partners
                    </li>
                    <li className="hover:border-b-4 rounded-sm hover:border-black/50">
                      Our Team
                    </li>
                    <li className="hover:border-b-4 rounded-sm hover:border-black/50">
                      Testimonial
                    </li>
                  </ul>
                </motion.div>
              )}
              <Link
                to="link"
                className="cursor-pointer hover:border-b-black hover:border-b-2 text-2xl"
                href="/"
              >
                Contact
              </Link>
              <div className="flex mt-2 gap-5 text-2xl border-b-2 p-6 border-b-black/40">
                <AiFillInstagram className="mt-1 duration-500 cursor-pointer hover:scale-125  " />{" "}
                <AiFillFacebook className="mt-1 duration-500 cursor-pointer hover:scale-125 " />{" "}
                <AiFillGithub className="mt-1 duration-500 cursor-pointer hover:scale-125  " />{" "}
                <AiOutlineWhatsApp className="mt-1 duration-500 cursor-pointer hover:scale-125  " />
              </div>
              Design by D.Tamil kumaran
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="">
      <div className="dark:bg-black/80 dark:h-full bg-[#FFB400]  h-[1000px]   rounded-lg  lg:h-full">
        <motion.div
          initial={{ y: -400 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="container   pt-5 mx-10 rounded-lg text-xl text-white font-bold"
        >
          <div className=" flex flex-wrap justify-between   lg:mx-5  py-2">
            {/*Logo */}
            <div
              onClick={() => setTheme(nextTheme)}
              className="  lg:flex  w-[55px]  lg:w-[50px]   "
            >
              <img
                className="-mt-2 lg:flex lg:mt-2 cursor-pointer animate-bounce rounded-full"
                src={Pic}
                alt="img"
              />
            </div>
            <div className="">
              {!menu ? (
                <div onClick={menuShow} className="cursor-pointer  lg:hidden ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8 bg-black/40 rounded duration-500 hover:scale-110  hover:bg-black -ml-24 fixed"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                </div>
              ) : (
                ""
              )}
            </div>

            {/*search */}
            <div className="hidden lg:flex my-auto">
              <div className="bg-gray-800/50  rounded-l-xl ">
                <BiSearchAlt size={23} className="my-auto mt-3 ml-3 " />
              </div>
              <input
                className="bg-gray-800/40   rounded-r-xl outline-none w-[340px] h-[40px] text-xl pl-5 font-light"
                placeholder="search"
                type="search"
              />
            </div>
            {/**Nav */}
            <div className="hidden lg:flex z-10 my-auto font-semibold   ">
              <div className="  ">
                <Link
                  to="Home"
                  className="p-5 hover:duration-300 cursor-pointer  hover:border-b-4 border-black/50 rounded"
                >
                  Home
                </Link>
              </div>

              <div className="">
                <Link
                  to="About"
                  className="p-5 hover:duration-300 cursor-pointer  hover:border-b-4 border-black/50 rounded"
                >
                  Projects
                </Link>
              </div>

              <div className="">
                <Link
                  to="ser"
                  className="p-5 hover:duration-300   hover:border-b-4 border-black/50 rounded"
                  href="/"
                >
                  Services
                </Link>
              </div>

              <div className="">
                <Link
                  onClick={showMenu}
                  className=" p-5 hover:duration-300  hover:border-b-4 border-black/50 rounded"
                >
                  About
                </Link>
                {!open ? (
                  ""
                ) : (
                  <motion.div
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute   mt-5"
                  >
                    <ul className="bg-black/20 rounded p-4 ml- ">
                      <li className="hover:border-b-4 rounded-sm  hover:border-black/50">
                        Partners
                      </li>
                      <li className="hover:border-b-4 rounded-sm hover:border-black/50">
                        Our Team
                      </li>
                      <li className="hover:border-b-4 rounded-sm hover:border-black/50">
                        Testimonial
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>

              <div className="">
                <Link
                  to="link"
                  className="p-5 hover:duration-300    hover:border-b-4 border-black/50 rounded"
                  href="/"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/**Login */}
            <div className="hidden lg:flex  justify-center items-center gap-5 text-lg font-semibold ">
              <a
                className="bg-gray-800/20 p-2 dark:hover:bg-black   hover:bg-gray-800/60 hover:duration-1000   rounded-xl "
                href="/"
              >
              
                Log In
              </a>
              <a
                className="bg-gray-800/20 p-2 dark:hover:bg-black hover:bg-gray-800/60 hover:duration-1000 rounded-xl "
                href="/"
              >
              
                Sign In
              </a>
            </div>
          </div>
        </motion.div>
        {
          nextTheme &&
          <div className="">
        <Home1 />
        <About />
        <Services />
        <Contact />
        </div>
        }

      </div>
      </div>
    </section>
  );
};

export default Navbar;

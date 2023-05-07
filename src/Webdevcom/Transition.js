import React from "react";
import { motion } from "framer-motion";

const Transition = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0% ", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen z-50 bg-red-500"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0% ", width: "0%" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen z-50 bg-white"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0% ", width: "0%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen z-50 bg-green-500"
      />
    </>
  );
};

export default Transition;

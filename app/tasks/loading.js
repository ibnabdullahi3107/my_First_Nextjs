"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      className="flex justify-center items-center h-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        className="loading loading-infinity loading-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default Loading;

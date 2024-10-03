"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import from next/navigation
import { useEffect, useState } from "react";

const HomePage = () => {
  const router = useRouter(); // next/navigation useRouter
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);

    // Simulate route change events using router.push and router.replace

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-5 relative">
      {/* Show loading spinner when loading state is true */}
      {loading && (
        <div className="absolute inset-0 bg-opacity-50 bg-gray-200 flex justify-center items-center">
          <motion.div
            className="loading loading-spinner loading-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          ></motion.div>
        </div>
      )}

      <motion.h1
        className="text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      {/* Card with Image and Info */}
      <motion.div
        className="card w-96 bg-base-100 shadow-xl mb-8 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center p-4"
        >
          <Image
            src="/sadiq.jpeg"
            alt="Sadiq Image"
            width={100}
            height={100}
            priority
            className="w-24 h-24 object-cover rounded-full shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        <div className="card-body text-center">
          <h2 className="card-title text-center">Abubakar Sadiq Abdullahi</h2>
          <p>Computer Science Student & Web Developer</p>
          <p>Experience with React, Tailwind CSS, Node.js, and more.</p>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <button
          className="btn btn-primary"
          onClick={() => {
            setLoading(true);
            router.push("/about");
          }}
        >
          About Me
        </button>

        <button
          className="btn btn-accent"
          onClick={() => {
            setLoading(true);
            router.push("/drinks");
          }}
        >
          My Projects
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => {
            setLoading(true);
            router.push("/tasks");
          }}
        >
          My Task
        </button>
      </motion.div>
    </div>
  );
};

export default HomePage;

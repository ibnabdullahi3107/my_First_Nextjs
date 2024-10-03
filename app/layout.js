"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import "./globals.css";
import Providers from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-base-100`}
      >
        {/* Animated Navbar */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Navbar />
        </motion.div>

        {/* Main Content with Smooth Fade-in */}
        <motion.main
          className="px-8 py-20 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Providers>{children}</Providers>
          </motion.div>
        </motion.main>

        {/* Footer (optional) */}
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <div>
            <p>© 2024 Abubakar Sadiq . All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

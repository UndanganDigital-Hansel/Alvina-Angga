"use client";

import React from "react";
import { motion } from "framer-motion";
import { container, item, zoomItem } from "@/lib/motionVariants";
import { useSearchParams } from "next/navigation";

interface CoverScreenProps {
  onOpen: () => void;
}

export default function CoverScreen({ onOpen }: CoverScreenProps) {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to"); // ambil nama dari URL
  const displayName = guestName ? decodeURIComponent(guestName) : "Tamu Undangan";

  const handleOpen = () => {
    // bisa jalankan confetti di sini

    onOpen();
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background blur + grayscale */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
        style={{ backgroundImage: "url('/images/bg1.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Konten */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="p-10">
          <motion.img
            src="/images/the wedding.png"
            className="w-72 h-auto mx-auto"
            variants={item}
          />
          <motion.img
            src="/images/wayang gold.png"
            variants={zoomItem}
            alt="Couple"
            className="object-cover my-8 w-72 h-auto mx-auto"
          />
          <motion.img
            src="/images/name cover.png"
            variants={item}
            className="w-72 h-auto mx-auto"
          />

          {/* Tambahan: Nama tamu */}
          <motion.p
            variants={item}
            className="mt-6 text-lg md:text-xl font-semibold text-white"
          >
            Kepada Yth. <br /> {displayName}
          </motion.p>
        </div>

        <motion.button
          onClick={handleOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          variants={item}
          className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-lg"
        >
          Buka Undangan
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

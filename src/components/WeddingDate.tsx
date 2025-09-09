"use client";

import React from "react";
import { motion } from "framer-motion";
import { container, item, zoomItem } from "@/lib/motionVariants";
import Countdown from "./Countdown";
import { Card } from "./ui/card";
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

export default function WeddingDate() {
  return (
    <motion.section
      id="date"
      className="text-center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <Card className="m-5 bg-primary w-full max-w-5xl mx-auto mb-6">
        <motion.h1
          className="text-2xl font-bold font-serif text-white"
          variants={item}
        >
          Allah Subhanahu Wa Ta'ala berfirman
        </motion.h1>

        <motion.div className="p-5" variants={item}>
          <Card className="p-5 shadow-xl">
            <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
              <svg
                className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <p>"Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah)."</p>
              <h5 className="my-5 text-primary text-center">QS. Adh-Dhariyat: 49</h5>
            </blockquote>
          </Card>
        </motion.div>

        <motion.div className="p-5" variants={item}>
          <Card className="p-5 shadow-xl">
            <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
              <svg
                className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <p>"dan sesungguhnya Dialah yang menciptakan pasangan laki-laki dan perempuan"</p>
              <h5 className="my-5 text-primary text-center">QS. An-Najm: 45</h5>
            </blockquote>
          </Card>
        </motion.div>
      </Card>

      <motion.div
        className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center"
        style={{ backgroundImage: "url('/images/sepatu.JPG')" }}
        variants={zoomItem}
      >
        {/* Overlay dark + blur */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        {/* Gradient overlay atas */}
        <div className="absolute top-0 left-0 w-full h-32 md:h-40 bg-gradient-to-b from-white to-transparent" />

        {/* Gradient overlay bawah */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 bg-gradient-to-t from-white to-transparent" />

        {/* Konten */}
        <div className="relative z-10 text-center px-4 md:px-10 py-16 md:py-24 text-white w-full max-w-3xl mx-auto">
          <motion.h2 className="text-2xl md:text-4xl font-bold mb-6 font-serif">
            Waktu & Tempat
          </motion.h2>

          <motion.div variants={zoomItem}>
            <Countdown eventDate="2025-09-24T00:00:00" />
          </motion.div>

          <motion.div className="mt-6 md:mt-10 space-y-6 text-sm md:text-base" variants={container}>
            <motion.div variants={zoomItem}>
              <h3 className="text-lg md:text-xl font-semibold">Akad Nikah</h3>
              <p>Kamis, 24 September 2025 - 09.00 WIB</p>
              <p>Masjid Agung</p>
            </motion.div>

            <motion.div variants={zoomItem}>
              <h3 className="text-lg md:text-xl font-semibold">Resepsi</h3>
              <p>Kamis, 24 September 2025 - 13.00 WIB</p>
              <p>Gedung Serbaguna</p>
            </motion.div>
          </motion.div>

          <motion.div className="flex justify-center mt-10">
            <Button
              type="button"
              onClick={() => (window.location.href = "https://example.com")}
              className="px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-2 bg-primary hover:bg-primary text-white border border-primary"
            >
              <MapPin /> Location
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import { container, item } from "@/lib/motionVariants";
import { Calendar, ChevronsDown } from "lucide-react";

export default function HomeSection() {
  return (
    <motion.section
      id="home"
      className="relative text-center py-20 h-screen overflow-hidden"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Background image responsive */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center
        bg-[url('/images/bg.jpg')] lg:bg-[url('/images/galery4.jpg')]"
      ></div>

      {/* Overlay gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-white" />

      {/* Konten */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-10 text-center w-full px-4">
        <motion.h1
          className="font-serif text-3xl md:text-4xl text-secondary drop-shadow-lg"
          variants={item}
        >
          Undangan Pernikahan
        </motion.h1>

        <motion.img
          className="p-7 w-100 md:w-150 h-auto mx-auto"
          src="/images/NameCover.png"
          alt="Name Cover"
          variants={item}
        />

        <motion.a
          href="https://calendar.google.com"
          target="_blank"
          className="inline-block mt-6 px-5 py-2 rounded-full bg-primary text-white shadow-lg"
          variants={item}
        >
          <div className="flex gap-3 items-center">
            <Calendar /> Simpan ke Google Calendar
          </div>
        </motion.a>

        <motion.p
          variants={item}
          className="flex flex-col justify-center items-center text-gray-600 mt-5"
        >
          Scroll
          <ChevronsDown />
        </motion.p>
      </div>
    </motion.section>
  );
}


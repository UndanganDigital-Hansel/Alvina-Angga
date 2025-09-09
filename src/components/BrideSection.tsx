"use client";

import React from "react";
import { motion } from "framer-motion";
import { container, item, zoomItem } from "@/lib/motionVariants";

export default function BrideSection() {
  return (
    <div>


      <motion.section
        id="bride"
        className="text-center py-15 "
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.div className="svg-wrapper -mt-1" variants={container}> {/* -mt-1 biar overlap dikit */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="block w-full leading-none"
          >
            <path
              fill="oklch(0.7930 0.0598 241.5861)"
              // transparansi biar halus
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,96C960,96,1056,160,1152,154.7C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </motion.div>
        <div className="bg-primary py-10 ">
          <div className="w-full max-w-5xl mx-auto">
          {/* Opening arabic text */}
          <motion.h2
            className="font-arabic text-2xl mb-4 text-secondary"
            variants={item}
          >
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </motion.h2>

          <motion.h2
            className="text-2xl font-bold mb-2 font-serif text-white"
            variants={item}
          >
            Assalamualaikum Warahmatullahi Wabarakatuh
          </motion.h2>

          <motion.p
            className="max-w-xl mx-auto text-sm my-5 text-gray-200"
            variants={item}
          >
            Tanpa mengurangi rasa hormat, kami mengundang Anda untuk menghadiri
            acara pernikahan kami:
          </motion.p>

          {/* Bride */}
          <motion.div
            variants={item}
            className="relative flex justify-center items-center mt-20 p-5"
          >
            <motion.img
              src="/images/cewe.jpeg"
              alt="Mempelai Wanita"
              className="w-72 object-cover  shadow-lg e rounded-tr-[100px] rounded-bl-[100px]" variants={zoomItem}
            />

            <motion.div className=" p-6  text-start -ml-39 z-10" variants={item}>
              <motion.img className="brightness-1000 w-200" src="/images/Alfina .png" variants={item} />


            </motion.div>
          </motion.div>
          <motion.p className="text-white text-start mx-5" variants={item}>
            Nur Alfinatu Lailatul Kasanah
          </motion.p>
          <motion.p className="text-white text-start mx-5" variants={item}>
            Putri Dari Alm. Bapak Ngadisan & Ibu Sun Mukayuni
          </motion.p>

    

          {/* Separator */}
          <div className="flex justify-center my-15">

            <motion.img src="/images/& .png" className="w-20 brightness-1000" variants={zoomItem} />
          </div>

          {/* Groom */}
          <motion.div
            variants={item}
            className="relative flex justify-center items-center p-5"
          >
            <motion.div className=" mt-20 px-8   text-start -mr-35 z-10" variants={item}>

              <motion.img className="brightness-1000 " src="/images/Angga.png" variants={item} />


            </motion.div>
            <motion.img
              variants={zoomItem}
              src="/images/cowo.jpeg"
              alt="Mempelai Pria"
              className="max-w-70 object-cover  shadow-lg rounded-tl-[100px] rounded-br-[100px]"
            />
          </motion.div>
          <motion.p className="text-white text-end mx-5" variants={item}>
            Fellandy Angga Ariyanto
          </motion.p>
          <motion.p className="text-white text-end mx-5" variants={item}>
            Putra Dari Alm. Bapak Rusmiyanto & Ibu Sunarsih
          </motion.p>
          </div>
        </div>
        <div className="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="block w-full leading-none"
          >
            <path
              fill="oklch(0.7930 0.0598 241.5861)"
              d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,165.3C560,160,640,128,720,128C800,128,880,160,960,186.7C1040,213,1120,235,1200,218.7C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            />
          </svg>
        </div>
      </motion.section>

    </div>
  );
}


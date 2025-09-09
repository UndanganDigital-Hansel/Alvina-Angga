// src/lib/motionVariants.ts
import { Variants } from "framer-motion";

// Kontainer: handle stagger antar anak
export const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay antar item
    },
  },
};

// Item umum (slide dari bawah)
export const item: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Item alternatif (zoom in)
export const zoomItem: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

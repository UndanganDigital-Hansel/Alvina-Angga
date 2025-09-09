"use client";

import React, { useState, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import CoverScreen from "@/components/CoverScreen";
import HomeSection from "@/components/HomeSection";
import BrideSection from "@/components/BrideSection";
import WeddingDate from "@/components/WeddingDate";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import RsvpForm from "@/components/RSVPform";

// Loader sederhana
function GlobalLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function InvitationPage() {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setLoading(true); // tampilkan loader
    setTimeout(() => {
      setOpened(true);
      setLoading(false); // matikan loader setelah siap
    }, 1500); // kasih delay 1.5 detik biar smooth
  };

  return (
    <>
      <AnimatePresence>
        {!opened && !loading && (
          <Suspense fallback={<GlobalLoader />}>
            <CoverScreen key="cover" onOpen={handleOpen} />
          </Suspense>
        )}
      </AnimatePresence>

      {loading && <GlobalLoader />}

      {opened && !loading && (
        <Suspense fallback={<GlobalLoader />}>
          <main className="bg-white">
            <div className="mx-auto">
              <HomeSection />
              <BrideSection />
              <WeddingDate />
              <Gallery />
              <RsvpForm />
              <Footer />
            </div>

            {/* Musik Player tetap fixed */}
            <MusicPlayer start={opened} />
          </main>
        </Suspense>
      )}
    </>
  );
}

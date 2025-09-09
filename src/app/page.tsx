"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CoverScreen from "@/components/CoverScreen";
import HomeSection from "@/components/HomeSection";
import BrideSection from "@/components/BrideSection";
import WeddingDate from "@/components/WeddingDate";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import RsvpForm from "@/components/RSVPform";

export default function InvitationPage() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!opened && <CoverScreen key="cover" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
        <main className=" bg-white">
          <div className=" mx-auto">
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
      )}
    </>
  );
}

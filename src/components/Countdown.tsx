"use client";
import React from "react";
import { Card } from "./ui/card";
import { useCountdown } from "../lib/Countdown";

type Props = { eventDate?: string | Date };

export default function Countdown({ eventDate }: Props) {
  const timeLeft = useCountdown(eventDate);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="text-center" aria-live="polite">
      <h2 className="mb-4">Menuju Hari Bahagia</h2>
      <div className="flex justify-center gap-4">
        <div>
          <Card className="p-5 h-15 w-15 flex items-center justify-center">
            <span className="text-2xl font-medium">{String(timeLeft.days)}</span>
          </Card>
          <h3 className="mt-2 text-sm">Hari</h3>
        </div>

        <div>
          <Card className="p-5 h-15 w-15 flex items-center justify-center">
            <span className="text-2xl font-medium">{pad(timeLeft.hours)}</span>
          </Card>
          <h3 className="mt-2 text-sm">Jam</h3>
        </div>

        <div>
          <Card className="p-5 h-15 w-15 flex items-center justify-center">
            <span className="text-2xl font-medium">{pad(timeLeft.minutes)}</span>
          </Card>
          <h3 className="mt-2 text-sm">Menit</h3>
        </div>

        <div>
          <Card className="p-5 h-15 w-15 flex items-center justify-center">
            <span className="text-2xl font-medium">{pad(timeLeft.seconds)}</span>
          </Card>
          <h3 className="mt-2 text-sm">Detik</h3>
        </div>
      </div>
    </section>
  );
}

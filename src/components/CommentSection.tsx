"use client";

import React, { useState } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    setComments([text, ...comments]);
    setText("");
  };

  return (
    <section id="comment" className="bg-gray-100 py-16">
      <h2 className="font-esthetic text-3xl text-center mb-6">Ucapan & Doa</h2>
      <div className="max-w-lg mx-auto space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tulis ucapan..."
          className="w-full border rounded-lg p-3"
        />
        <button
          onClick={submit}
          className="px-4 py-2 rounded-lg bg-blue-400 text-white shadow"
        >
          Kirim
        </button>
        <div className="space-y-2">
          {comments.map((c, i) => (
            <div key={i} className="p-3 bg-white rounded-lg shadow">
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

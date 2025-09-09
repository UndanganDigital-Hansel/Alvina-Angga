"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

type RsvpComment = {
  id: number | string;
  nama: string;
  hadir: boolean;
  pesan: string | null;
  created_at: string | null;
};

export default function RsvpForm() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to");

  const [nama, setNama] = useState("");
  const [hadir, setHadir] = useState("1");
  const [pesan, setPesan] = useState("");
  const [status, setStatus] = useState("");
  const [comments, setComments] = useState<RsvpComment[]>([]);
  const [page, setPage] = useState(1);
  const perPage = 5;

  const totalPages = Math.max(1, Math.ceil(comments.length / perPage));
  const paginatedComments = comments.slice((page - 1) * perPage, page * perPage);

  const fetchComments = async () => {
    // jangan pakai generic di .from — beri typing setelah menerima data
    const { data, error } = await supabase
      .from("rsvp")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("fetchComments error:", error);
      return;
    }

    if (data) {
      setComments(data as RsvpComment[]);
    }
  };

  useEffect(() => {
    if (guestName) {
      setNama(decodeURIComponent(guestName));
    }
  }, [guestName]);

  useEffect(() => {
    fetchComments();

    const channel = supabase
      .channel("rsvp-comments")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "rsvp" },
        (payload: { new: RsvpComment }) => {
          setComments((prev) => [payload.new, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.from("rsvp").insert([
      {
        nama,
        hadir: hadir === "1",
        pesan,
      },
    ]);

    if (error) {
      setStatus("❌ Gagal mengirim RSVP.");
    } else {
      setStatus("✅ Terima kasih! RSVP berhasil dikirim.");
      setNama("");
      setPesan("");
      setHadir("1");
    }
  };

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Konfirmasi Kehadiran</h2>
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl shadow bg-white space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Kehadiran</label>
            <select
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
              value={hadir}
              onChange={(e) => setHadir(e.target.value)}
            >
              <option value="1">✅ Hadir</option>
              <option value="0">❌ Tidak Bisa Hadir</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Ucapan / Doa</label>
            <textarea
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
              rows={3}
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white rounded-lg py-2 font-medium cursor-pointer transition"
          >
            Kirim RSVP
          </button>
        </form>
        {status && <p className="mt-3 text-center">{status}</p>}

        <div className="mt-10 mb-50">
          <h3 className="text-xl font-semibold text-center mb-6">Ucapan & Doa</h3>
          {comments.length === 0 ? (
            <p className="text-center text-gray-500">Belum ada ucapan.</p>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                {paginatedComments.map((c, idx) => (
                  <motion.div
                    key={c.id ?? idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-white shadow rounded-2xl p-4 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <strong className="text-gray-800">{c.nama}</strong>
                      <span className="text-sm">{c.hadir ? "✅ Hadir" : "❌ Tidak Bisa Hadir"}</span>
                    </div>
                    <p className="text-gray-700">{c.pesan}</p>
                    <small className="text-gray-400 text-xs">
                      {c.created_at ? new Date(c.created_at).toLocaleString("id-ID") : ""}
                    </small>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center mt-6">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => page > 1 && setPage(page - 1)}
                        className={page === 1 ? "cursor-pointer opacity-50 item-center" : ""}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          className="cursor-pointer border-0"
                          isActive={page === i + 1}
                          onClick={() => setPage(i + 1)}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() => page < totalPages && setPage(page + 1)}
                        className={page === totalPages ? "cursor-pointer opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
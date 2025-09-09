import React from "react";

export default function GiftSection() {
  return (
    <section id="gift" className="bg-gray-50 py-16 text-center">
      <h2 className="font-esthetic text-3xl mb-4">Love Gift</h2>
      <p>Dengan hormat, bagi Anda yang ingin memberikan tanda kasih kepada kami:</p>

      <div className="mt-6 space-y-4 max-w-lg mx-auto">
        <div className="p-4 border rounded-lg shadow">
          <h3 className="font-semibold">Transfer Bank</h3>
          <p>Bank BCA - 1234567891234</p>
          <p>a.n Fellandy Angga</p>
        </div>

        <div className="p-4 border rounded-lg shadow">
          <h3 className="font-semibold">QRIS</h3>
          <img src="/images/donate.png" alt="QRIS" className="w-40 mx-auto" />
        </div>
      </div>
    </section>
  );
}

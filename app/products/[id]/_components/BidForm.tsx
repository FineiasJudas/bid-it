"use client";
import { useState } from "react";

export default function BidForm({ currentPrice }: { currentPrice: number }) {
  const [bidAmount, setBidAmount] = useState("");

  return (
    <>
      <input
        type="number"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
        placeholder="Coloque um valor"
        className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-300 mb-3 placeholder:text-gray-600"
      />
      <button
        onClick={() => console.log("Bid:", bidAmount)}
        className="bg-gray-800 rounded text-white p-2 mb-3"
      >
        Fazer Bid
      </button>
    </>
  );
}

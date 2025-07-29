"use client";

import { useMotivationStore } from "@/store/motivationStore";

export default function MotivationList() {
  const { motivations, removeMotivation, clearMotivations } =
    useMotivationStore();

  if (motivations.length === 0) {
    return <p className="text-gray-500 mt-4">No motivations yet.</p>;
  }

  return (
    <div className="mt-4">
      <ul className="space-y-2">
        {motivations.map((m) => (
          <li
            key={m.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>{m.text}</span>
            <button
              onClick={() => removeMotivation(m.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={clearMotivations}
        className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
      >
        Clear All
      </button>
    </div>
  );
}

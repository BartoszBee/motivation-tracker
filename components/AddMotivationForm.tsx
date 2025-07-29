"use client";

import { useState } from "react";
import { useMotivationStore } from "@/store/motivationStore";

export default function AddMotivationForm() {
  const [text, setText] = useState("");
  const addMotivation = useMotivationStore((state) => state.addMotivation);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addMotivation(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add motivation..."
        className="border rounded p-2 flex-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
}

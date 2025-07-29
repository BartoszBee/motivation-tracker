import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Motivation {
  id: number;
  text: string;
}

interface MotivationStore {
  motivations: Motivation[];
  addMotivation: (text: string) => void;
  removeMotivation: (id: number) => void;
  clearMotivations: () => void;
}

export const useMotivationStore = create<MotivationStore>()(
  persist(
    (set) => ({
      motivations: [],
      addMotivation: (text) =>
        set((state) => ({
          motivations: [...state.motivations, { id: Date.now(), text }],
        })),
      removeMotivation: (id) =>
        set((state) => ({
          motivations: state.motivations.filter((m) => m.id !== id),
        })),
      clearMotivations: () => set({ motivations: [] }),
    }),
    { name: "motivation-storage" }
  )
);

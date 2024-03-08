import { create } from "zustand";

interface useBalanceStoreModel {
  balance: number;
  listIterationsBalance: { id: number; result: number }[];
  PrctExposition: number;
  totalOrders: number;
  setBalance: (newBalance: number) => void;
  setListIterationsBalance: (newListIterationsBalance: { id: number; result: number }[]) => void;
  setPrctExposition: (newPrctExposition: number) => void;
  setTotalOrders: (newTotalOrders: number) => void;
}

export const useBalanceStore = create<useBalanceStoreModel>((set) => ({
  balance: 0,
  listIterationsBalance: [],
  PrctExposition: 0,
  totalOrders: 0,
  setBalance: (newBalance: number) => set({ balance: newBalance }),
  setListIterationsBalance: (newListIterationsBalance: { id: number; result: number }[]) => set({ listIterationsBalance: newListIterationsBalance }),
  setPrctExposition: (newPrctExposition: number) => set({ PrctExposition: newPrctExposition }),
  setTotalOrders: (newTotalOrders: number) => set({ totalOrders: newTotalOrders }),
}));

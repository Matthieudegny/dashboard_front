import { create } from "zustand";

//model
import { IterationDataGridHomeXY } from "../../model/Home/model_Home";

interface useHomeStoreModel {
  balance: number;
  listIterationsBalance: IterationDataGridHomeXY[];
  PrctExposition: number;
  totalOrders: number;
  setBalance: (newBalance: number) => void;
  setListIterationsBalance: (newListIterationsBalance: IterationDataGridHomeXY[]) => void;
  setPrctExposition: (newPrctExposition: number) => void;
  setTotalOrders: (newTotalOrders: number) => void;
}

export const useHomeStore = create<useHomeStoreModel>((set) => ({
  balance: 0,
  listIterationsBalance: [],
  PrctExposition: 0,
  totalOrders: 0,
  setBalance: (newBalance: number) => set({ balance: newBalance }),
  setListIterationsBalance: (newListIterationsBalance: IterationDataGridHomeXY[]) => set({ listIterationsBalance: newListIterationsBalance }),
  setPrctExposition: (newPrctExposition: number) => set({ PrctExposition: newPrctExposition }),
  setTotalOrders: (newTotalOrders: number) => set({ totalOrders: newTotalOrders }),
}));

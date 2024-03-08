import { create } from "zustand";

//model
import { GlobalOrderFillWithDatasDto } from "../model/Order/model_order";

interface useOrdersStoreModel {
  listGlobalOrders: GlobalOrderFillWithDatasDto[];
  setListGlobalOrders: (newListGlobalOrders: GlobalOrderFillWithDatasDto[]) => void;
}

export const useOrdersStore = create<useOrdersStoreModel>((set) => ({
  listGlobalOrders: [],
  setListGlobalOrders: (newListGlobalOrders: GlobalOrderFillWithDatasDto[]) => set({ listGlobalOrders: newListGlobalOrders }),
}));

import { create } from "zustand";

//models
import { SetupGoType, SetupSoType, FailureGoType, FailureSoType } from "../../model/Categories/model_catgories";

interface useCategoriesStoreModel {
  listSetupGo: SetupGoType[];
  setListSetupGo: (newListCategories: SetupGoType[]) => void;
  listSetupSo: SetupSoType[];
  setListSetupSo: (newListCategories: SetupSoType[]) => void;
  listFailureGo: FailureGoType[];
  setListFailureGo: (newListFailureGo: FailureGoType[]) => void;
  listFailureSo: FailureSoType[];
  setListFailureSo: (newListFailureSo: FailureSoType[]) => void;
}

export const useCategoriesStore = create<useCategoriesStoreModel>((set) => ({
  listSetupGo: [],
  setListSetupGo: (newListCategories: SetupGoType[]) => set({ listSetupGo: newListCategories }),
  listSetupSo: [],
  setListSetupSo: (newListCategories: SetupSoType[]) => set({ listSetupSo: newListCategories }),
  listFailureGo: [],
  setListFailureGo: (newListFailureGo: FailureGoType[]) => set({ listFailureGo: newListFailureGo }),
  listFailureSo: [],
  setListFailureSo: (newListFailureSo: FailureSoType[]) => set({ listFailureSo: newListFailureSo }),
}));

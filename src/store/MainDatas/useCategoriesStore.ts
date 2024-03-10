import { create } from "zustand";

//models
import { SetupType, FailureType } from "../../model/Categories/model_catgories";

interface useCategoriesStoreModel {
  listCategoriesSetup: SetupType[];
  setListCategories: (newListCategories: SetupType[]) => void;
  listCategoriesFailure: FailureType[];
  setListCategoriesFailure: (newListCategoriesFailure: FailureType[]) => void;
}

export const useCategoriesStore = create<useCategoriesStoreModel>((set) => ({
  listCategoriesSetup: [],
  setListCategories: (newListCategories: SetupType[]) => set({ listCategoriesSetup: newListCategories }),
  listCategoriesFailure: [],
  setListCategoriesFailure: (newListCategoriesFailure: FailureType[]) => set({ listCategoriesFailure: newListCategoriesFailure }),
}));

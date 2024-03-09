import { create } from "zustand";

//models
import { Setup, Failure } from "../../model/Categories/model_catgories";

interface useCategoriesStoreModel {
  listCategoriesSetup: Setup[];
  setListCategories: (newListCategories: Setup[]) => void;
  listCategoriesFailure: Failure[];
  setListCategoriesFailure: (newListCategoriesFailure: Failure[]) => void;
}

export const useCategoriesStore = create<useCategoriesStoreModel>((set) => ({
  listCategoriesSetup: [],
  setListCategories: (newListCategories: Setup[]) => set({ listCategoriesSetup: newListCategories }),
  listCategoriesFailure: [],
  setListCategoriesFailure: (newListCategoriesFailure: Failure[]) => set({ listCategoriesFailure: newListCategoriesFailure }),
}));

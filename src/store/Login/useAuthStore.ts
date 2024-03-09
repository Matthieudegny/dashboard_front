import { create } from "zustand";

interface useAuthStoreModel {
  token: string;
  isLoggedIn: boolean;
  idUser: number;
  setToken: (newToken: string) => void;
  setIsLoggedIn: (newIsLoggedIn: boolean) => void;
  setIdUser: (newIdUser: number) => void;
}

export const useAuthStore = create<useAuthStoreModel>((set) => ({
  token: "",
  isLoggedIn: false,
  idUser: 0,
  setToken: (newToken: string) => set({ token: newToken }),
  setIsLoggedIn: (newIsLoggedIn: boolean) => set({ isLoggedIn: newIsLoggedIn }),
  setIdUser: (newIdUser: number) => {
    console.log("newIdUser", newIdUser);
    set({ idUser: newIdUser });
  },
}));

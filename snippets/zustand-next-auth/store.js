import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthState = create()(
  persist(
    (set) => ({
      signUpToken: "",
      setSignUpToken: (token) => set({ signUpToken: token }),
      userEmail: "",
      setUserEmail: (email) => set({ userEmail: email }),
      authToken: "",
      setAuthToken: (token) => set({ authToken: token }),
      logOut: () => set({ authToken: "" }),
      expiresAt: 0,
      setExpiresAt: (expiresAt) => set({ expiresAt }),
    }),
    {
      name: "pakt-dashboard",
    }
  )
);

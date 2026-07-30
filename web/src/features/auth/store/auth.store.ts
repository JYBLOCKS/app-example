import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthSession, AuthUser } from "../models/auth.models";

type AuthState = {
  accessToken: string | null;
  user: AuthUser | null;
  setSession: (session: AuthSession) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
      setSession: (session) => set({ accessToken: session.accessToken, user: session.user }),
      logout: () => set({ accessToken: null, user: null }),
    }),
    { name: "app-example.auth" },
  ),
);

export const selectIsAuthenticated = (state: AuthState) => Boolean(state.accessToken && state.user);

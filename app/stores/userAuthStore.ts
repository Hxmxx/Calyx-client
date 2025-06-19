import { create } from "zustand";
import { Session, User } from "@supabase/supabase-js";

interface AuthState {
    user: User | null;
    session: Session | null;
    isInitialized: boolean;
    setAuth: (user: User | null, session: Session | null) => void;
    clearAuth: () => void;
    setInitialized: (initialized: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    session: null,
    isInitialized: false,
    setAuth: (user, session) => set({ user, session }),
    clearAuth: () => set({ user: null, session: null }),
    setInitialized: (isInitialized) => set({ isInitialized }),
  }))
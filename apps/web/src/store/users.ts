import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserState {
  username: string | null
  setUsername: (name: string) => void
  clearUsername: () => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      username: null,
      setUsername: (name) => set({ username: name }),
      clearUsername: () => set({ username: null }),
    }),
    {
      name: 'user-storage', // key in localStorage
    },
  ),
)

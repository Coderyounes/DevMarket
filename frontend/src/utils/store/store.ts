import { create } from "zustand";
import { ProfileType } from "../constants/types";
import { persist } from "zustand/middleware";
import { initialUserState } from "../constants/initial_states";

type UserStateType = {
  user: ProfileType;
  setUser: (user: ProfileType) => void;
  reset: () => void;
};

// export const useAuthStore = create<UserStateType>((set) => (
// 	{
//   user: {
// 	_id: null,
// 	email: null,
// 	account_type: null,
// 	firstname: null,
// 	lastname: null,
// 	country: null,
// 	age: null,
//   },
//   setUser: (user) => set((state) => ({ ...state, user })),
// }));

export const useAuthStore = create(
  persist(
    (set) => ({
      user: initialUserState,
      setUser: (user: UserStateType) =>
        set((state: UserStateType) => ({ ...state, user })),
      reset: () => set({ user: initialUserState }),
    }),
    {
      name: "currentUser", // name of the item in the storage (must be unique)
    }
  )
);

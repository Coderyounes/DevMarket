import { create } from 'zustand';
import { ProfileType } from '../constants/types';

type UserStateType = {
  user: ProfileType;
  setUser: (user: ProfileType) => void;
};

export const useAuthStore = create<UserStateType>((set) => ({
  user: {
	_id: null,
	email: null,
	account_type: null,
	firstname: null,
	lastname: null,
	country: null,
	age: null,
  },
  setUser: (user) => set((state) => ({ ...state, user })),
}));

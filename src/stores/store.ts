import { create } from 'zustand';

export interface GlobalState {
  isClick: boolean;
  isOn: boolean;

  zoom: () => void;
  toggle: () => void;
}

const useStore = create<GlobalState>((set) => ({
  isClick: false,
  isOn: false,

  zoom: () => set(() => ({ isClick: true })),
  toggle: () => set((state) => ({ isOn: !state.isOn })),
}));

export default useStore;

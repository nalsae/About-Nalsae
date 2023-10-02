import { create } from 'zustand';

export interface MonitorState {
  isClick: boolean;
  isOn: boolean;

  zoom: () => void;
  toggle: () => void;
}

const useMonitorStore = create<MonitorState>((set) => ({
  isClick: false,
  isOn: false,

  zoom: () => set(() => ({ isClick: true })),
  toggle: () => set((state) => ({ isOn: !state.isOn })),
}));

export default useMonitorStore;

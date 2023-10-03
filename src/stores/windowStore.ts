import { create } from 'zustand';

import uniqBy from 'lodash/uniqBy';

type Window = {
  type: 'folder' | 'page';
  url: string;
  name: string;
  isMinimized: boolean;
  isMaximized: boolean;
};

export interface WindowState {
  windows: Window[];

  open: (window: Window) => void;
  minimize: (name: string) => void;
  maximize: (window: Window) => void;
  restore: (name: string) => void;
  close: (name: string) => void;
}

const useWindowStore = create<WindowState>((set) => ({
  windows: [],

  open: (window) =>
    set((state) => ({ windows: uniqBy([...state.windows, window], 'name') })),
  minimize: (name) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        name === window.name ? { ...window, isMinimized: true } : window,
      ),
    })),
  maximize: (window) =>
    set((state) => ({
      windows: state.windows.map(({ name }) =>
        name === window.name ? { ...window, isMaximized: true } : window,
      ),
    })),
  restore: (name) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        name === window.name
          ? { ...window, isMinimized: false, isMaximized: false }
          : window,
      ),
    })),
  close: (name) =>
    set((state) => ({
      windows: state.windows.filter((window) => name !== window.name),
    })),
}));

export default useWindowStore;

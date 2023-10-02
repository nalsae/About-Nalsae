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
  minimize: (window: Window) => void;
  maximize: (window: Window) => void;
  restore: (window: Window) => void;
  close: (window: Window) => void;
}

const useWindowStore = create<WindowState>((set) => ({
  windows: [],

  open: (window) =>
    set((state) => ({ windows: uniqBy([...state.windows, window], 'name') })),
  minimize: (window) =>
    set((state) => ({
      windows: state.windows.map(({ name }) =>
        name === window.name ? { ...window, isMinimized: true } : window,
      ),
    })),
  maximize: (window) =>
    set((state) => ({
      windows: state.windows.map(({ name }) =>
        name === window.name ? { ...window, isMaximized: true } : window,
      ),
    })),
  restore: (window) =>
    set((state) => ({
      windows: state.windows.map(({ name }) =>
        name === window.name
          ? { ...window, isMinimized: false, isMaximized: false }
          : window,
      ),
    })),
  close: (window) =>
    set((state) => ({
      windows: state.windows.filter(({ name }) => name !== window.name),
    })),
}));

export default useWindowStore;

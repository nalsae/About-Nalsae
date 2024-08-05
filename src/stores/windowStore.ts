import { create } from 'zustand';

import uniqBy from 'lodash/uniqBy';

type Window = {
  type: 'folder' | 'page';
  title: string;
  url: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
};

export type Titles =
  | 'About Me'
  | 'Projects'
  | 'Tech Stacks'
  | 'Hobby'
  | 'Playlist'
  | 'Album'
  | 'Email'
  | 'Intro'
  | 'Contact'
  | 'Activity'
  | 'Education'
  | 'Experience'
  | 'Interest'
  | 'Grow Story'
  | 'My Pokedex'
  | '33 1/3'
  | 'Piece Plan'
  | 'Improving BR Website'
  | 'Front-End'
  | 'Back-End'
  | 'Design'
  | 'Austria_1'
  | 'Austria_2'
  | 'Croatia_1'
  | 'Croatia_2'
  | 'France_1'
  | 'France_2'
  | 'Portugal_1'
  | 'Portugal_2'
  | 'Switzerland_1'
  | 'Switzerland_2';

export interface WindowState {
  tasks: Window[];

  'About Me': Window;
  Projects: Window;
  'Tech Stacks': Window;
  Hobby: Window;
  Playlist: Window;
  Album: Window;
  Email: Window;

  Intro: Window;
  Contact: Window;
  Activity: Window;
  Education: Window;
  Experience: Window;
  Interest: Window;

  'Grow Story': Window;
  'My Pokedex': Window;
  '33 1/3': Window;
  'Piece Plan': Window;
  'Improving BR Website': Window;

  'Front-End': Window;
  'Back-End': Window;
  Design: Window;

  Austria_1: Window;
  Austria_2: Window;
  Croatia_1: Window;
  Croatia_2: Window;
  France_1: Window;
  France_2: Window;
  Portugal_1: Window;
  Portugal_2: Window;
  Switzerland_1: Window;
  Switzerland_2: Window;

  addTask: (title: Titles) => void;
  deleteTask: (title: Titles) => void;

  open: (title: Titles) => void;
  minimize: (title: Titles) => void;
  toggleSize: (title: Titles) => void;
  restore: (title: Titles) => void;
  close: (title: Titles) => void;
}

const useWindowStore = create<WindowState>((set) => ({
  tasks: [],

  'About Me': {
    type: 'folder',
    title: 'About Me',
    url: "bg-[url('/assets/icon/folder_lightpink.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Projects: {
    type: 'folder',
    title: 'Projects',
    url: "bg-[url('/assets/icon/folder_pink.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  'Tech Stacks': {
    type: 'folder',
    title: 'Tech Stacks',
    url: "bg-[url('/assets/icon/folder_mint.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Hobby: {
    type: 'page',
    title: 'Hobby',
    url: "bg-[url('/assets/icon/heart_purple.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Playlist: {
    type: 'page',
    title: 'Playlist',
    url: "bg-[url('/assets/icon/heart_pink.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Album: {
    type: 'folder',
    title: 'Album',
    url: "bg-[url('/assets/icon/note_mint.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Email: {
    type: 'page',
    title: 'Email',
    url: '',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },

  Intro: {
    type: 'page',
    title: 'Intro',
    url: "bg-[url('/assets/icon/note_mint.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Contact: {
    type: 'page',
    title: 'Contact',
    url: "bg-[url('/assets/icon/note_white.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Activity: {
    type: 'page',
    title: 'Activity',
    url: "bg-[url('/assets/icon/note_mint.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Education: {
    type: 'page',
    title: 'Education',
    url: "bg-[url('/assets/icon/note_white.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Experience: {
    type: 'page',
    title: 'Experience',
    url: "bg-[url('/assets/icon/heart_pink.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Interest: {
    type: 'page',
    title: 'Interest',
    url: "bg-[url('/assets/icon/heart_purple.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },

  'Grow Story': {
    type: 'page',
    title: 'Grow Story',
    url: "bg-[url('/assets/icon/paper_growstory.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  'My Pokedex': {
    type: 'page',
    title: 'My Pokedex',
    url: "bg-[url('/assets/icon/paper_pokedex.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  '33 1/3': {
    type: 'page',
    title: '33 1/3',
    url: "bg-[url('/assets/icon/paper_33.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  'Piece Plan': {
    type: 'page',
    title: 'Piece Plan',
    url: "bg-[url('/assets/icon/paper_pieceplan.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  'Improving BR Website': {
    type: 'page',
    title: 'Improving BR Website',
    url: "bg-[url('/assets/icon/paper_br.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },

  'Front-End': {
    type: 'page',
    title: 'Front-End',
    url: "bg-[url('/assets/icon/paper_pink.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  'Back-End': {
    type: 'page',
    title: 'Back-End',
    url: "bg-[url('/assets/icon/paper_white.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Design: {
    type: 'page',
    title: 'Design',
    url: "bg-[url('/assets/icon/paper_pink.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },

  Austria_1: {
    type: 'page',
    title: 'Austria_1',
    url: "bg-[url('/assets/icon/photo_pink.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Austria_2: {
    type: 'page',
    title: 'Austria_2',
    url: "bg-[url('/assets/icon/photo_white.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Croatia_1: {
    type: 'page',
    title: 'France_2',
    url: "bg-[url('/assets/icon/photo_pink.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Croatia_2: {
    type: 'page',
    title: 'France_2',
    url: "bg-[url('/assets/icon/photo_white.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  France_1: {
    type: 'page',
    title: 'France_1',
    url: "bg-[url('/assets/icon/photo_pink.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  France_2: {
    type: 'page',
    title: 'France_2',
    url: "bg-[url('/assets/icon/photo_white.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Portugal_1: {
    type: 'page',
    title: 'Portugal_1',
    url: "bg-[url('/assets/icon/photo_pink.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Portugal_2: {
    type: 'page',
    title: 'Portugal_2',
    url: "bg-[url('/assets/icon/photo_white.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Switzerland_1: {
    type: 'page',
    title: 'Switzerland_1',
    url: "bg-[url('/assets/icon/photo_pink.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },
  Switzerland_2: {
    type: 'page',
    title: 'Switzerland_2',
    url: "bg-[url('/assets/icon/photo_white.png')]",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
  },

  addTask: (title) =>
    set((state) => ({
      tasks: uniqBy([...state.tasks, state[title]], 'title'),
    })),
  deleteTask: (title) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.title !== title),
    })),

  open: (title) =>
    set((state) => ({
      [title]: { ...state[title], isOpen: true },
    })),
  minimize: (title) =>
    set((state) => ({ [title]: { ...state[title], isMinimized: true } })),
  toggleSize: (title) =>
    set((state) => ({
      [title]: { ...state[title], isMaximized: !state[title].isMaximized },
    })),
  restore: (title) =>
    set((state) => ({
      [title]: { ...state[title], isMinimized: false, isMaximized: false },
    })),
  close: (title) =>
    set((state) => ({ [title]: { ...state[title], isOpen: false } })),
}));

export default useWindowStore;

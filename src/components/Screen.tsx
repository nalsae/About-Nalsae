'use client';

import { motion } from 'framer-motion';

import useOpenWindow from '@/hooks/useOpenWindow';

import Taskbar from './Taskbar';
import Windows from './Windows';

import { SCREENS_INFO } from '@/constants/contents';

export default function Screen() {
  const { handleDoubleClick } = useOpenWindow();

  return (
    <motion.div
      id="SCREEN"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="absolute grid grid-cols-8 grid-rows-4 top-[4.5vh] left-1/2 -translate-x-1/2 w-[124vh] h-[59vh] rounded-lg bg-contain bg-norepeat bg-center bg-[url('/assets/img/bg_window.png')] shadow-outer overflow-hidden">
      {SCREENS_INFO.map((icon, index) =>
        icon ? (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col justify-center items-center gap-[1.2vh]">
            <button
              onDoubleClick={handleDoubleClick}
              type="button"
              data-window-title={icon}
              data-url={ICONS_STYLE[icon]}
              className={`w-[7.1vh] h-[6.4vh] bg-no-repeat bg-contain bg-center drop-shadow-icon-big ${ICONS_STYLE[icon]}`}
            />
            <p className="text-purple-50 text-[1.5vh] font-bold text-center">
              {icon}
            </p>
          </motion.div>
        ) : (
          <div key={index} />
        ),
      )}
      <Taskbar />
      <Windows />
    </motion.div>
  );
}

const ICONS_STYLE = {
  'About Me': "bg-[url('/assets/icon/folder_lightpink.png')]",
  Hobby: "bg-[url('/assets/icon/heart_purple.png')]",
  Playlist: "bg-[url('/assets/icon/heart_pink.png')]",
  Projects: "bg-[url('/assets/icon/folder_pink.png')]",
  'Tech Stacks': "bg-[url('/assets/icon/folder_mint.png')]",
  Album: "bg-[url('/assets/icon/note_mint.png')]",
} as { [key: string]: string };

'use client';

import { motion } from 'framer-motion';

import useOpenWindow from '@/hooks/useOpenWindow';

import Window from '@/components/Window';

import { ABOUT_ME_CONTENTS } from '@/constants/contents';

export default function AboutMe() {
  const { handleDoubleClick } = useOpenWindow();

  return (
    <Window title="About Me" type="folder">
      <div className="flex flex-wrap gap-[1.5vh] my-[2.8vh] mx-[3.2vh]">
        {ABOUT_ME_CONTENTS.map((name, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-[1vh] text-purple-50 text-[1.2vh] font-bold">
            <button
              onDoubleClick={handleDoubleClick}
              type="button"
              data-window-title={name}
              data-url={ICONS_STYLE[name]}
              className={`w-[4.5vh] h-[5.7vh] bg-no-repeat bg-contain bg-center drop-shadow-icon-small ${ICONS_STYLE[name]}`}
            />
            <h3 className="w-[8vh] text-center leading-[1.5vh]">{name}</h3>
          </motion.div>
        ))}
      </div>
    </Window>
  );
}

const ICONS_STYLE = {
  Intro: "bg-[url('/assets/icon/note_mint.png')]",
  Contact: "bg-[url('/assets/icon/note_white.png')]",
  Activity: "bg-[url('/assets/icon/note_mint.png')]",
  Education: "bg-[url('/assets/icon/note_white.png')]",
  Experience: "bg-[url('/assets/icon/heart_pink.png')]",
  Interest: "bg-[url('/assets/icon/heart_purple.png')]",
} as { [key: string]: string };

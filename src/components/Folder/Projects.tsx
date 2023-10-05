'use client';

import { motion } from 'framer-motion';

import useOpenWindow from '@/hooks/useOpenWindow';

import Window from '@/components/Window';

import { PROJECTS_CONTENTS } from '@/constants/contents';

export default function Projects() {
  const { handleDoubleClick } = useOpenWindow();

  return (
    <Window title="Projects" type="folder">
      <div className="flex flex-wrap gap-[1.5vh] my-[2.8vh] mx-[3.2vh]">
        {PROJECTS_CONTENTS.map((name, index) => {
          return (
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
          );
        })}
      </div>
    </Window>
  );
}

const ICONS_STYLE = {
  'Grow Story': "bg-[url('/assets/icon/paper_growstory.png')]",
  'My Pokedex': "bg-[url('/assets/icon/paper_pokedex.png')]",
  '33 1/3': "bg-[url('/assets/icon/paper_33.png')]",
  'Piece Plan': "bg-[url('/assets/icon/paper_pieceplan.png')]",
  'Improving BR Website': "bg-[url('/assets/icon/paper_br.png')]",
} as { [key: string]: string };

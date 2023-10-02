'use client';

import useOpenWindow from '@/hooks/useOpenWindow';

import Window from '@/components/Window';

import { PROJECTS_CONTENTS } from '@/constants/contents';

export default function Projects() {
  const { handleDoubleClick } = useOpenWindow('page');

  return (
    <Window title="Projects">
      <div className="flex flex-wrap gap-[1.5vh] mt-[2.8vh] mx-[3.2vh]">
        {PROJECTS_CONTENTS.map((name, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-[0.5vh] text-purple-50 text-[1.2vh] font-bold">
              <button
                onDoubleClick={handleDoubleClick}
                type="button"
                data-window-name={name}
                data-url={ICONS_STYLE[name]}
                className={`w-[4.5vh] h-[5.7vh] bg-no-repeat bg-contain bg-center drop-shadow-icon-small ${ICONS_STYLE[name]}`}
              />
              <h3 className="w-[8vh] text-center">{name}</h3>
            </div>
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

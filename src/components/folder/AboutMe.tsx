'use client';

import useOpenWindow from '@/hooks/useOpenWindow';

import Window from '@/components/Window';

import { ABOUT_ME_CONTENTS } from '@/constants/contents';

export default function AboutMe() {
  const { handleDoubleClick } = useOpenWindow('page');

  return (
    <Window title="About Me">
      <div className="flex flex-wrap gap-[1.5vh] mt-[2.8vh] mx-[3.2vh]">
        {ABOUT_ME_CONTENTS.map((name, index) => (
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
  Interest: "bg-[url('/assets/icon/heart_purple.png')]",
} as { [key: string]: string };

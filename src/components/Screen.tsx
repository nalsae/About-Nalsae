'use client';

import { v4 as uuid } from 'uuid';

import useOpenWindow from '@/hooks/useOpenWindow';

import AboutMe from '@/components/folder/AboutMe';
import Projects from '@/components/folder//Projects';
import TechStacks from '@/components/folder//TechStacks';
import Taskbar from './Taskbar';

import { SCREENS_INFO } from '@/constants/contents';

export default function Screen() {
  const { windows, handleDoubleClick } = useOpenWindow('folder');

  return (
    <div className="absolute grid grid-cols-8 grid-rows-4 top-[6.7vh] left-1/2 -translate-x-1/2 w-[118vh] h-[55.8vh] pt-[1vh] rounded-lg bg-contain bg-norepeat bg-center bg-[url('/assets/img/bg_window.png')] shadow-outer overflow-hidden">
      {SCREENS_INFO.map((icon, index) =>
        icon ? (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-[0.6vh]">
            <button
              onDoubleClick={handleDoubleClick}
              type="button"
              data-window-name={icon}
              data-url={ICONS_STYLE[icon]}
              className={`w-[7.1vh] h-[6.4vh] bg-no-repeat bg-contain bg-center drop-shadow-icon-big ${ICONS_STYLE[icon]}`}
            />
            <p className="text-purple-50 text-[1.5vh] font-bold text-center">
              {icon}
            </p>
          </div>
        ) : (
          <div key={index} />
        ),
      )}
      <Taskbar />
      {windows.map(({ name, isMinimized }) => {
        if (isMinimized) return;

        if (name === 'About Me') return <AboutMe key={uuid()} />;
        if (name === 'Projects') return <Projects key={uuid()} />;
        if (name === 'Tech Stacks') return <TechStacks key={uuid()} />;
      })}
    </div>
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

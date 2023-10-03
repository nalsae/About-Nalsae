'use client';

import { v4 as uuid } from 'uuid';

import useOpenWindow from '@/hooks/useOpenWindow';

import Taskbar from './Taskbar';
import AboutMe from '@/components/Folder/AboutMe';
import Projects from '@/components/Folder/Projects';
import TechStacks from '@/components/Folder/TechStacks';
import Intro from '@/components/Page/AboutMe/Intro';
import Contact from '@/components/Page/AboutMe/Contact';
import Activity from '@/components/Page/AboutMe/Activity';
import Education from '@/components/Page/AboutMe/Education';
import Interest from '@/components/Page/AboutMe/Interest';
import FrontEnd from '@/components/Page/TechStacks/FrontEnd';
import BackEnd from '@/components/Page/TechStacks/BackEnd';
import Design from '@/components/Page/TechStacks/Design';
import GrowStory from '@/components/Page/Projects/GrowStory';
import MyPokedex from '@/components/Page/Projects/MyPokedex';
import Vinyl from '@/components/Page/Projects/Vinyl';
import PiecePlan from '@/components/Page/Projects/PiecePlan';
import BaskinRobbins from '@/components/Page/Projects/BaskinRobbins';

import { SCREENS_INFO } from '@/constants/contents';

export default function Screen() {
  const { windows, handleDoubleClick } = useOpenWindow('folder');

  return (
    <div className="absolute grid grid-cols-8 grid-rows-4 top-[6.7vh] left-1/2 -translate-x-1/2 w-[118vh] h-[55.8vh] pt-[1vh] rounded-lg bg-contain bg-norepeat bg-center bg-[url('/assets/img/bg_window.png')] shadow-outer overflow-hidden">
      {SCREENS_INFO.map((icon, index) =>
        icon ? (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-[1.2vh]">
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

        return WINDOWS[name];
      })}
    </div>
  );
}

const WINDOWS = {
  'About Me': <AboutMe key={uuid()} />,
  Projects: <Projects key={uuid()} />,
  'Tech Stacks': <TechStacks key={uuid()} />,

  Intro: <Intro key={uuid()} />,
  Contact: <Contact key={uuid()} />,
  Activity: <Activity key={uuid()} />,
  Education: <Education key={uuid()} />,
  Interest: <Interest key={uuid()} />,

  'Grow Story': <GrowStory key={uuid()} />,
  'My Pokedex': <MyPokedex key={uuid()} />,
  '33 1/3': <Vinyl key={uuid()} />,
  'Piece Plan': <PiecePlan key={uuid()} />,
  'Improving BR Website': <BaskinRobbins key={uuid()} />,

  'Front-End': <FrontEnd key={uuid()} />,
  'Back-End': <BackEnd key={uuid()} />,
  Design: <Design key={uuid()} />,
} as { [key: string]: React.ReactNode };

const ICONS_STYLE = {
  'About Me': "bg-[url('/assets/icon/folder_lightpink.png')]",
  Hobby: "bg-[url('/assets/icon/heart_purple.png')]",
  Playlist: "bg-[url('/assets/icon/heart_pink.png')]",
  Projects: "bg-[url('/assets/icon/folder_pink.png')]",
  'Tech Stacks': "bg-[url('/assets/icon/folder_mint.png')]",
  Album: "bg-[url('/assets/icon/note_mint.png')]",
} as { [key: string]: string };

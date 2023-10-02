import AboutMe from './AboutMe';
import Taskbar from './Taskbar';

import { ICONS_INFO } from '@/constants/contents';

export default function Screen() {
  return (
    <div className="absolute grid grid-cols-8 grid-rows-4 top-[6.7vh] left-1/2 -translate-x-1/2 w-[118vh] h-[55.8vh] pt-[1vh] rounded-lg bg-contain bg-norepeat bg-center bg-[url('/assets/img/bg_window.png')] shadow-outer overflow-hidden">
      {ICONS_INFO.map((icon, index) =>
        icon ? (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-[0.6vh]">
            <button
              type="button"
              className={`w-[7.1vh] h-[6.4vh] bg-no-repeat bg-contain bg-center drop-shadow-icon-big ${ICONS_URL[icon]}`}
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
      <AboutMe />
    </div>
  );
}

const ICONS_URL = {
  'About Me': "bg-[url('/assets/icon/folder_lightpink.png')]",
  Hobby: "bg-[url('/assets/icon/heart_purple.png')]",
  Playlist: "bg-[url('/assets/icon/heart_pink.png')]",
  Projects: "bg-[url('/assets/icon/folder_pink.png')]",
  'Teck Stacks': "bg-[url('/assets/icon/folder_mint.png')]",
  Album: "bg-[url('/assets/icon/note_mint.png')]",
} as { [key: string]: string };

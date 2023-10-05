'use client';

import { twMerge } from 'tailwind-merge';

import useWindowStore, { Titles } from '@/stores/windowStore';

import useResizeWindow from '@/hooks/useResizeWindow';
import useDragWindow from '@/hooks/useDragWindow';
import useAnimateWindow from '@/hooks/useAnimateWindow';

interface WindowProps {
  type: 'folder' | 'page';
  title: Titles;
  children?: React.ReactNode;
  className?: string;
}

export default function Window({
  type,
  title,
  children,
  className,
}: WindowProps) {
  const { scope } = useAnimateWindow();

  const window = useWindowStore((state) => state);

  const { divRef, sectionRef, handleClick, handleDoubleClick } =
    useResizeWindow(title);
  const {
    currentPosition,
    handleDragStart,
    handleDrag,
    handleDragOver,
    handleDragEnd,
  } = useDragWindow();

  const initialTop = type === 'folder' ? '3.4vh' : '15.4vh';
  const initialLeft = type === 'folder' ? '14.5vh' : '59vh';
  const resizeStyle = window[title].isMaximized ? '' : 'resize';

  const windowStyle = {
    display: window[title].isMinimized ? 'none' : 'block',
    left: window[title].isMaximized
      ? 0
      : currentPosition.left
      ? currentPosition.left
      : initialLeft,
    top: window[title].isMaximized
      ? 0
      : currentPosition.top
      ? currentPosition.top
      : initialTop,
    width: window[title].isMaximized ? '100%' : '50vh',
    height: window[title].isMaximized ? '100%' : '50vh',
    zIndex: window[title].isMaximized ? '60' : '0',
  };
  const sectionStyle = {
    width: window[title].isMaximized ? '100%' : '50vh',
    height: window[title].isMaximized ? '90%' : '28vh',
    boxShadow: window[title].isMaximized ? 'none' : '4px 4px 4px 0px #6A43B8',
  };

  return (
    <div
      ref={scope}
      draggable={!window[title].isMaximized}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      className={twMerge(
        `absolute min-w-[27vh] w-[50vh] opacity-0 cursor-grab touch-none`,
        className,
      )}
      style={windowStyle}>
      <div
        onDoubleClick={handleDoubleClick}
        ref={divRef}
        className="sticky top-0 left-0 flex justify-between items-center w-full min-w-[27vh] pl-[0.8vh] pr-[0.4vh] border-[0.5vh] border-purple-30 bg-purple-10 shadow-window touch-none">
        <h2 className="text-purple-70 text-[1.3vh] font-bold">{title}</h2>
        <ul
          onClick={handleClick}
          data-title={title}
          className="flex items-center gap-[0.4vh] py-[0.3vh]">
          {BUTTONS_INFO.map(({ title, iconUrl }, index) => (
            <li key={index} className="w-[2.1vh] h-[2.1vh]">
              <button
                title={title}
                className={`w-full h-full bg-no-repeat bg-contain bg-center ${iconUrl}`}
              />
            </li>
          ))}
        </ul>
      </div>
      <section
        ref={sectionRef}
        className={twMerge(
          `absolute top-[3.05vh] left-0 min-w-[27vh] w-[50vh] max-h-[48vh] h-[28vh] border-[0.5vh] border-purple-30 bg-white-10 shadow-window overflow-auto overflow-x-hidden scrollbar ${resizeStyle}`,
          className,
        )}
        style={sectionStyle}>
        {children}
      </section>
    </div>
  );
}

const BUTTONS_INFO = [
  { title: '최소화', iconUrl: "bg-[url('/assets/icon/button_minimize.png')]" },
  { title: '최대화', iconUrl: "bg-[url('/assets/icon/button_maximize.png')]" },
  { title: '닫기', iconUrl: "bg-[url('/assets/icon/button_close.png')]" },
];

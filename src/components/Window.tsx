'use client';

import { animated } from 'react-spring';
import { twMerge } from 'tailwind-merge';

import useWindowStore from '@/stores/windowStore';

import useResizeWindow from '@/hooks/useResizeWindow';
import useDragWindow from '@/hooks/useDragWindow';

interface WindowProps {
  type: 'folder' | 'page';
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Window({
  type,
  title,
  children,
  className,
}: WindowProps) {
  const { minimize, close } = useWindowStore();

  const { divRef, sectionRef } = useResizeWindow();
  const { position, setPosition } = useDragWindow();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLButtonElement)) return;

    const title = event.target.closest('ul')?.dataset.title as string;

    if (event.target.title === '최소화') minimize(title);

    if (event.target.title === '최대화') {
    }

    if (event.target.title === '닫기') close(title);
  };

  const windowStyle =
    type === 'folder'
      ? 'top-[3.4vh] left-[14.5vh]'
      : 'top-[12.7vh] right-[14.5vh]';

  return (
    <animated.div
      className={twMerge(
        `absolute min-w-[27vh] w-[46.45vh] touch-none ${windowStyle}`,
        className,
      )}
      style={{ x: position.x, y: position.y }}>
      <animated.div
        {...setPosition()}
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
      </animated.div>
      <section
        ref={sectionRef}
        className={twMerge(
          'absolute top-[3.05vh] left-0 min-w-[27vh] w-[46.45vh] max-h-[48vh] h-[28vh] border-[0.5vh] border-purple-30 bg-white-10 shadow-window resize overflow-auto scrollbar',
          className,
        )}>
        {children}
      </section>
    </animated.div>
  );
}

const BUTTONS_INFO = [
  { title: '최소화', iconUrl: "bg-[url('/assets/icon/button_minimize.png')]" },
  { title: '최대화', iconUrl: "bg-[url('/assets/icon/button_maximize.png')]" },
  { title: '닫기', iconUrl: "bg-[url('/assets/icon/button_close.png')]" },
];

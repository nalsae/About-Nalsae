'use client';

import Link from 'next/link';

import { v4 as uuid } from 'uuid';
import { motion } from 'framer-motion';

import useWindowStore, { Titles } from '@/stores/windowStore';

import Clock from './Clock';

export default function Taskbar() {
  const { tasks, open, restore } = useWindowStore((state) => state);

  const handleTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!(event.target instanceof HTMLButtonElement)) return;

    const title = event.target.dataset.windowTitle as Titles;

    restore(title);
  };

  const handleEmail = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!(event.target instanceof HTMLButtonElement)) return;

    open('Email');
    restore('Email');
  };

  const MotionLink = motion(Link);

  return (
    <section
      id="TASK_BAR"
      className="fixed bottom-0 flex items-center w-full h-[8.82vh] border-t-[0.5vh] border-purple-30 bg-purple-10 text-xl font-bold shadow-taskbar z-50">
      <div className="w-[9.7vh] h-full px-[1.7vh] py-[1.4vh] border-r-[0.5vh] border-purple-30">
        <motion.button
          type="button"
          title="메뉴"
          whileHover={{ scale: 1.1 }}
          className="w-full h-full bg-no-repeat bg-contain bg-center bg-[url('/assets/icon/button_menu.png')] drop-shadow-icon-big"
        />
      </div>
      <nav className="ml-[2vh] mr-auto">
        <ul className="flex gap-[1.6vh]">
          <li>
            <MotionLink
              href="https://github.com/Nalsae"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub 바로 가기"
              whileHover={{ scale: 1.1 }}
              className="block w-[5.5vh] h-[5vh] bg-no-repeat bg-contain bg-center bg-[url('/assets/icon/link_github.png')] drop-shadow-icon-big"
            />
          </li>
          <li>
            <MotionLink
              href="https://velog.io/@nalsae"
              target="_blank"
              rel="noopener noreferrer"
              title="Velog 바로 가기"
              whileHover={{ scale: 1.1 }}
              className="block w-[5.5vh] h-[5vh] bg-no-repeat bg-contain bg-center bg-[url('/assets/icon/link_velog.png')] drop-shadow-icon-big"
            />
          </li>
          {tasks.map(({ title, url }) => (
            <li key={uuid()}>
              <motion.button
                onClick={handleTask}
                type="button"
                title="열기"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                data-window-title={title}
                className={`w-[5.5vh] h-[5vh] bg-no-repeat bg-contain bg-center drop-shadow-icon-big ${url}`}
              />
            </li>
          ))}
        </ul>
      </nav>
      <motion.button
        onClick={handleEmail}
        type="button"
        title="메일 보내기"
        whileHover={{ scale: 1.1 }}
        className="w-[5.5vh] h-[5vh] mr-[2vh] bg-no-repeat bg-contain bg-center bg-[url('/assets/icon/button_mail.png')] drop-shadow-icon-big"
      />
      <Clock />
    </section>
  );
}

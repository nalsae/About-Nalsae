'use client';

import { v4 as uuid } from 'uuid';

import useWindowStore from '@/stores/windowStore';

import Link from 'next/link';
import Clock from './Clock';

export default function Taskbar() {
  const { windows } = useWindowStore();

  return (
    <section className="fixed bottom-0 flex items-center w-full h-[8.82vh] border-t-[0.5vh] border-purple-30 bg-purple-10 text-xl font-bold shadow-taskbar z-50">
      <div className="w-[9.7vh] h-full px-[1.7vh] py-[1.4vh] border-r-[0.5vh] border-purple-30">
        <button
          type="button"
          title="메뉴"
          className="w-full h-full bg-no-repeat bg-contain bg-center bg-[url('/assets/icon/button_menu.png')] drop-shadow-icon-big"
        />
      </div>
      <nav className="ml-[2vh] mr-auto">
        <ul className="flex gap-[1.6vh]">
          <li>
            <Link
              href="https://github.com/Nalsae"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub 바로 가기"
              className="block w-[5.5vh] h-[5vh] bg-no-repeat bg-contain bg-center bg-[url('/assets/icon/link_github.png')] drop-shadow-icon-big"
            />
          </li>
          <li>
            <Link
              href="https://velog.io/@nalsae"
              target="_blank"
              rel="noopener noreferrer"
              title="Velog 바로 가기"
              className="block w-[5.5vh] h-[5vh] bg-no-repeat bg-contain bg-center bg-[url('/assets/icon/link_velog.png')] drop-shadow-icon-big"
            />
          </li>
          {windows.map(({ url }) => (
            <li key={uuid()}>
              <button
                type="button"
                title="열기"
                className={`w-[5.5vh] h-[5vh] bg-no-repeat bg-contain bg-center drop-shadow-icon-big ${url}`}
              />
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        title="메일 보내기"
        className="w-[5.5vh] h-[5vh] mr-[2vh] bg-no-repeat bg-contain bg-center bg-[url('/assets/icon/button_mail.png')] drop-shadow-icon-big"
      />
      <Clock />
    </section>
  );
}

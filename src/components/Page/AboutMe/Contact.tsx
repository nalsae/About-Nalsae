'use client';

import Window from '@/components/Window';
import Link from 'next/link';

export default function Contact() {
  return (
    <Window title="Contact" type="page">
      <div className="flex flex-col items-start gap-[2vh] max-w-[60vh] px-[3.3vh] py-[3vh] mx-auto">
        <h3 className="mb-[1vh] text-[3vh] text-purple-70 font-bold">
          Contact Me 😊
        </h3>
        <section className="flex flex-col gap-[2vh] text-black-50 text-[1.5vh] leading-[2.3vh]">
          <Link
            href="mailto:nalsae0207@naver.com?subject=안녕하세요."
            className="w-fit px-[1vh] py-[0.7vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            📫 Email 보내기
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Nalsae"
            className="w-fit px-[1vh] py-[0.7vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            📁 GitHub 바로 가기
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://velog.io/@nalsae"
            className="w-fit px-[1vh] py-[0.7vh] mb-[1vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            📰 Velog 바로 가기
          </Link>
        </section>
      </div>
    </Window>
  );
}

'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';

import useWindowStore from '@/stores/windowStore';

import Window from '@/components/Window';

export default function Contact() {
  const { open, restore } = useWindowStore((state) => state);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!(event.target instanceof HTMLButtonElement)) return;

    open('Email');
    restore('Email');
  };

  const MotionLink = motion(Link);

  return (
    <Window title="Contact" type="page">
      <div className="flex flex-col items-start gap-[2vh] max-w-[60vh] px-[3.3vh] py-[3vh] mx-auto">
        <h3 className="mb-[1vh] text-[3vh] text-purple-70 font-bold">
          Contact Me 😊
        </h3>
        <section className="flex flex-col gap-[2vh] text-black-50 text-[1.5vh] leading-[2.3vh]">
          <motion.button
            onClick={handleClick}
            type="button"
            whileHover={{ scale: 1.05 }}
            className="w-fit px-[1vh] py-[0.7vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            📫 Email 보내기
          </motion.button>
          <MotionLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Nalsae"
            whileHover={{ scale: 1.05 }}
            className="w-fit px-[1vh] py-[0.7vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            📁 GitHub 바로 가기
          </MotionLink>
          <MotionLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://velog.io/@nalsae"
            whileHover={{ scale: 1.05 }}
            className="w-fit px-[1vh] py-[0.7vh] mb-[1vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            📰 Velog 바로 가기
          </MotionLink>
        </section>
      </div>
    </Window>
  );
}

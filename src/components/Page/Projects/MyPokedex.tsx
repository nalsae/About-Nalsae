'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

import useSwiperNavigation from '@/hooks/useSwiperNavigation';

import Window from '@/components/Window';

import { MY_POKEDEX_INFO } from '@/constants/contents';

export default function MyPokedex() {
  const { swiperRef, handlePrev, handleNext } = useSwiperNavigation();

  const { date, logoUrl, stacks, features, roles, imgs } = MY_POKEDEX_INFO;

  return (
    <Window title="My Pokedex" type="page">
      <div className="flex flex-col items-start gap-[3vh] max-w-[60vh] px-[3.3vh] py-[3vh] mx-auto">
        <p className="mb-[-2vh] text-[1.3vh] text-purple-30 font-bold">
          {date}
        </p>
        <h3 className="mb-[1vh] text-[3vh] text-purple-70 font-bold leading-[3.5vh]">
          <span className="text-purple-50">나만의 포켓몬 도감,</span> My Pokedex
          😺
        </h3>
        <Image
          src={logoUrl}
          alt="My Pokedex 로고"
          width={508}
          height={208}
          className="shadow-page-light"
        />
        <div>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1.5vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            💻 배포 사이트
          </h4>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://my-poke-dex.vercel.app/"
            className="text-[1.5vh] text-purple-50 font-bold">
            👉 My Pokedex 바로 가기
          </Link>
        </div>
        <div>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1.5vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            🔧 기술 스택
          </h4>
          <p className="flex flex-wrap gap-[0.8vh] text-[1.1vh] tracking-[0.05vh]">
            {stacks.map((stack, index) => (
              <span
                key={index}
                className="inline-block px-[1.2vh] py-[0.6vh] rounded-full emphasis">
                {stack}
              </span>
            ))}
          </p>
        </div>
        <div>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1.5vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            🚩 개요
          </h4>
          <p className="text-[1.5vh] indent-[1vh] leading-[2.3vh]">
            포켓몬 관련 정보들, 검색하기 너무 귀찮지 않으신가요? My Pokedex로{' '}
            <span className="pl-[0.3vh] emphasis">
              원하는 포켓몬과 관련 정보들을 바로 검색
            </span>
            하고{' '}
            <span className="pl-[0.3vh] emphasis">포켓몬 상성 관련 정보</span>
            까지 쉽게 확인할 수 있어요. 이 뿐만 아니라 나만의 포켓몬 조합을
            저장하고 공유도 할 수 있답니다.
          </p>
        </div>
        <div>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1.5vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            🤔 기획 의도
          </h4>
          <p className="text-[1.5vh] indent-[1vh] leading-[2.3vh]">
            직접 포켓몬 게임을 하면서 포켓몬 관련 정보나 상성을 검색할 때마다
            느꼈던 불편함을 해소하고자 기획한 프로젝트입니다. 하나의 사이트에서
            사용자가{' '}
            <span className="pl-[0.3vh] emphasis">
              다양한 포켓몬 관련 정보를 열람
            </span>
            하는 것을 목표로 했습니다. 추후{' '}
            <span className="pl-[0.3vh] emphasis">
              자주 사용하는 포켓몬 조합을 저장하고 공유하는 기능
            </span>
            을 추가할 예정입니다.
          </p>
        </div>
        <div>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1.5vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            ✨ 주요 기능
          </h4>
          <ul>
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-[1.5vh] leading-[2.3vh] list-style-dot">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1.5vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            🙋‍♂️ 기여한 점
          </h4>
          <ul>
            {roles.map((role, index) => (
              <li
                key={index}
                className="flex items-center text-[1.5vh] leading-[2.3vh] list-style-dot">
                {role}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1.5vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            📁 저장소
          </h4>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/My-Pokedex/my-pokedex-client"
            className="text-[1.5vh] text-purple-50 font-bold">
            👉 GitHub Repository 바로 가기
          </Link>
        </div>
        <div>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1.5vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            📒 진행 과정
          </h4>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://my-pokedex.notion.site/Pokedex-0757927d7a40462abdd096025e2f8927?pvs=4"
            className="text-[1.5vh] text-purple-50 font-bold">
            👉 Notion 바로 가기
          </Link>
        </div>
        <div>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1.5vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            📷 구현 이미지
          </h4>
          <p className="mb-[1vh] text-gray-70 text-[1.3vh]">
            각 이미지를 클릭하시면 원본 크기로 보실 수 있습니다 😉
          </p>
          <div className="relative">
            <Swiper ref={swiperRef} loop={true} slidesPerView="auto">
              {imgs.map(({ name, url }, index) => (
                <SwiperSlide key={index}>
                  <Image
                    onClick={() => window.open(url)}
                    src={url}
                    alt=""
                    width={1246}
                    height={796}
                    className="object-cover"
                  />
                  <p className="mt-[1vh] text-center text-purple-50 font-bold">
                    {name}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
            <motion.div
              onClick={handlePrev}
              role="button"
              title="이전으로"
              whileHover={{ scale: 1.3 }}
              className="absolute top-1/2 left-[1vh] w-[2vh] h-[2vh] bg-no-repeat bg-contain bg-center bg-[url('/assets/icon/button_prev.png')] drop-shadow-swiper-button cursor-pointer z-40"
            />
            <motion.div
              onClick={handleNext}
              role="button"
              title="다음으로"
              whileHover={{ scale: 1.3 }}
              className="absolute top-1/2 right-[1vh] w-[2vh] h-[2vh] bg-no-repeat bg-contain bg-center bg-[url('/assets/icon/button_next.png')] drop-shadow-swiper-button cursor-pointer z-40"
            />
          </div>
        </div>
      </div>
    </Window>
  );
}

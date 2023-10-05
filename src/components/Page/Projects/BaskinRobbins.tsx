'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

import useSwiperNavigation from '@/hooks/useSwiperNavigation';

import Window from '@/components/Window';

import { BR_INFO } from '@/constants/contents';

export default function BaskinRobbins() {
  const { swiperRef, handlePrev, handleNext } = useSwiperNavigation();

  const { date, logoUrl, stacks, features, roles, imgs } = BR_INFO;

  return (
    <Window title="Improving BR Website" type="page">
      <div className="flex flex-col items-start gap-[3vh] max-w-[60vh] px-[3.3vh] py-[3vh] mx-auto">
        <p className="mb-[-2vh] text-[1.3vh] text-purple-30 font-bold">
          {date}
        </p>
        <h3 className="mb-[1vh] text-[3vh] text-purple-70 font-bold leading-[3.5vh]">
          <span className="text-purple-50">한국 배스킨라빈스</span> 웹 사이트
          개선 🍧
        </h3>
        <Image
          src={logoUrl}
          alt="프로젝트 로고"
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
            href="https://baskin-robbins-31.github.io/Baskin-Robbins-31/"
            className="text-[1.5vh] text-purple-50 font-bold">
            👉 개선한 웹 사이트 바로 가기
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
            🤔 기획 의도
          </h4>
          <p className="text-[1.5vh] indent-[1vh] leading-[2.3vh]">
            기존 한국 배스킨라빈스 웹 사이트의 느린 초기 렌더링 속도, 제대로
            구현되지 않은 반응형, 접근성을 준수하지 않은 마크업, 사용자
            친화적이지 않은 UI 등의{' '}
            <span className="pl-[0.3vh] emphasis">
              단점을 파악하고 이를 개선한 웹 사이트를 제작
            </span>
            하고자 했습니다.
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
            href="https://github.com/nalsae/Baskin-Robbins-31"
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
            href="https://github.com/Baskin-Robbins-31/Baskin-Robbins-31/wiki"
            className="text-[1.5vh] text-purple-50 font-bold">
            👉 GitHub Wiki 바로 가기
          </Link>
        </div>
        <div>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1.5vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            💭 회고
          </h4>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://velog.io/@nalsae/%EB%B0%B0%EC%8A%A4%ED%82%A8%EB%9D%BC%EB%B9%88%EC%8A%A4-%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8%EB%A5%BC-%EA%B0%9C%EC%84%A0%ED%95%B4%EB%B3%B4%EC%95%98%EB%8B%A4.-feat.-%EC%9B%B9-%EC%A0%91%EA%B7%BC%EC%84%B1"
            className="text-[1.5vh] text-purple-50 font-bold">
            👉 Velog 게시글 바로 가기
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

'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import useSwiperNavigation from '@/hooks/useSwiperNavigation';

import Window from '@/components/Window';

import { VINYL_INFO } from '@/constants/contents';

export default function Vinyl() {
  const { swiperRef, handlePrev, handleNext } = useSwiperNavigation();

  const { date, logoUrl, stacks, features, roles, imgs } = VINYL_INFO;

  return (
    <Window title="33 1/3" type="page">
      <div className="flex flex-col items-start gap-[3vh] max-w-[60vh] px-[3.3vh] py-[3vh] mx-auto">
        <p className="mb-[-2vh] text-[1.3vh] text-purple-30 font-bold">
          {date}
        </p>
        <h3 className="mb-[1vh] text-[3vh] text-purple-70 font-bold leading-[3.5vh]">
          <span className="text-purple-50">LP 아카이빙 서비스,</span> 33 1/3 💿
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
            href="http://33-1-3.com/"
            className="text-[1.5vh] text-purple-50 font-bold">
            👉 33 1/3 바로 가기
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
            턴 테이블 위에서 LP가 1분에 몇 번이나 회전하는지 측정하는 단위를
            RPM이라고 합니다. 그 중에서도 33 1/3은 가장 보편적인 회전
            속도입니다. 또한 33 1/3은 순환소수라는 특징이 있습니다. 이처럼{' '}
            <span className="pl-[0.3vh] emphasis">
              사용자에게 보편적이고 무한한 LP 아카이빙 서비스를 제공
            </span>
            하고자 33 1/3 서비스를 기획하게 되었습니다.
          </p>
        </div>
        <div>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1.5vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            🤔 기획 의도
          </h4>
          <p className="text-[1.5vh] indent-[1vh] leading-[2.3vh]">
            LP를 수집하는 사람들이 소장 중인 LP를 관리할 수 있는 편리한 웹
            서비스가 없기 때문에,{' '}
            <span className="pl-[0.3vh] emphasis">
              좋은 가독성과 UI로 LP 수집욕을 자극
            </span>
            함과 동시에{' '}
            <span className="pl-[0.3vh] emphasis">
              수집한 LP 목록을 타인에게 공유
            </span>
            할 수 있는 아카이빙 서비스를 제작하고자 했습니다.
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
            href="https://github.com/33-1-3"
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
            <div
              onClick={handlePrev}
              role="button"
              className="absolute top-1/2 left-[1vh] w-[2vh] h-[2vh] bg-no-repeat bg-contain bg-center bg-[url('/assets/icon/button_prev.png')] drop-shadow-swiper-button cursor-pointer z-40"
            />
            <div
              onClick={handleNext}
              role="button"
              className="absolute top-1/2 right-[1vh] w-[2vh] h-[2vh] bg-no-repeat bg-contain bg-center bg-[url('/assets/icon/button_next.png')] drop-shadow-swiper-button cursor-pointer z-40"
            />
          </div>
        </div>
      </div>
    </Window>
  );
}

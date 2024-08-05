'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

import useSwiperNavigation from '@/hooks/useSwiperNavigation';

import Window from '@/components/Window';

import { GROW_STORY_INFO } from '@/constants/contents';

export default function GrowStory() {
  const { swiperRef, handlePrev, handleNext } = useSwiperNavigation();

  const { date, logoUrl, stacks, features, roles, imgs } = GROW_STORY_INFO;

  return (
    <Window title="Grow Story" type="page">
      <div className="flex flex-col items-start gap-[3vh] max-w-[60vh] px-[3.3vh] py-[3vh] mx-auto">
        <p className="mb-[-2vh] text-[1.3vh] text-purple-30 font-bold">
          {date}
        </p>
        <h3 className="mb-[1vh] text-[3vh] text-purple-70 font-bold leading-[3.5vh]">
          <span className="text-purple-50">식집사 커뮤니티,</span> Grow Story 🌳
        </h3>
        <Image
          src={logoUrl}
          alt="Grow Story 로고"
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
            href="https://growstory.vercel.app/"
            className="text-[1.5vh] text-purple-50 font-bold">
            👉 Grow Story 바로 가기
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
            키우는 식물을 손쉽고 재미있게 관리할 수 있는 방법 없을까요? 식물을
            손쉽게 등록하고 관리할 수 있는{' '}
            <span className="pl-[0.3vh] emphasis">식물 카드 기능,</span> 내
            식물을 자랑하고 다양한 식집사들과 소통할 수 있는{' '}
            <span className="pl-[0.3vh] emphasis">커뮤니티 기능,</span> 활동해서
            획득한 포인트로 꾸밀 수 있는{' '}
            <span className="pl-[0.3vh] emphasis">나만의 정원 기능</span>까지!
            Grow Story에서는 이 모든 것이 가능합니다.
          </p>
        </div>
        <div>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1.5vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            🤔 기획 의도
          </h4>
          <p className="text-[1.5vh] indent-[1vh] leading-[2.3vh]">
            요즘 매체에서 반려 식물에 대한 이야기가 자주 등장합니다. 반려 식물을
            취미로 기르는 사람을 의미하는 '식집사'라는 신조어가 등장할 만큼{' '}
            <span className="pl-[0.3vh] emphasis">
              반려 식물에 대한 관심도가 높아지는 추세
            </span>
            입니다. 이러한 트렌드를 반영하여 초보부터 베테랑 식집사까지{' '}
            <span className="pl-[0.3vh] emphasis">
              모두가 쉽고 재미있게 즐길 수 있는 식집사 커뮤니티
            </span>
            를 제작하고자 했습니다.
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
          <div className="px-[1.6vh] py-[1.4vh] mt-[0.8vh] rounded-[1vh] emphasis">
            <h5 className="pb-[0.8vh] mb-[0.8vh] border-b-[1px] border-dashed font-semibold">
              관련 블로그 게시글
            </h5>
            <ul className="flex flex-col gap-[0.5vh] text-[1.5vh] leading-[2.2vh]">
              <li>
                <Link
                  href="https://velog.io/@nalsae/1-%EC%9A%B0%EB%8B%B9%ED%83%95%ED%83%95-Garden-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B0%9C%EB%B0%9C-%EA%B8%B0%EB%A1%9D-%EC%84%A4%EA%B3%84%EC%99%80-%EC%B4%88%EA%B8%B0-%EB%A7%B5-%EB%A0%8C%EB%8D%94%EB%A7%81"
                  target="_blank"
                  rel="noopenner noreferrer">
                  👉 #1 우당탕탕 Garden 페이지 개발 기록 - 설계와 초기 정원 맵
                  렌더링
                </Link>
              </li>
              <li>
                <Link
                  href="https://velog.io/@nalsae/2-%EC%9A%B0%EB%8B%B9%ED%83%95%ED%83%95-Garden-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B0%9C%EB%B0%9C-%EA%B8%B0%EB%A1%9D-%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8-%EC%84%A4%EC%B9%98"
                  target="_blank"
                  rel="noopenner noreferrer">
                  👉 #2 우당탕탕 Garden 페이지 개발 기록 - 정원 오브젝트 설치와
                  이벤트 처리
                </Link>
              </li>
              <li>
                <Link
                  href="https://velog.io/@nalsae/%EB%A7%88%EC%9A%B0%EC%8A%A4-%EC%B6%94%EC%A0%81-%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8%EC%99%80-%EC%9E%84%EC%8B%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0"
                  target="_blank"
                  rel="noopenner noreferrer">
                  👉 #3 우당탕탕 Garden 페이지 개발 기록 - 마우스 추적 오브젝트
                </Link>
              </li>
              <li>
                <Link
                  href="https://velog.io/@nalsae/Next.js-S3-%EB%B2%84%ED%82%B7-%EC%A0%95%EC%A0%81-%EB%B0%B0%ED%8F%AC-%EA%B4%80%EB%A0%A8-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0%EA%B8%B0-feat.-SSG"
                  target="_blank"
                  rel="noopenner noreferrer">
                  👉 Next.js + S3 버킷 정적 배포 관련 이슈 해결기 (feat. SSG)
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1.5vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            📁 저장소
          </h4>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/codestates-seb/seb45_main_011"
            className="text-[1.5vh] text-purple-50 font-bold">
            👉 GitHub Repository 바로 가기
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

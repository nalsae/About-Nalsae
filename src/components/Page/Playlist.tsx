'use client';

import Youtube from 'react-youtube';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import useSwiperNavigation from '@/hooks/useSwiperNavigation';

import Window from '@/components/Window';

export default function Playlist() {
  const { swiperRef, handlePrev, handleNext } = useSwiperNavigation();

  return (
    <Window title="Playlist" type="page">
      <div className="relative flex flex-col items-start gap-[2vh] max-w-[60vh] px-[3.3vh] py-[3vh] mx-auto">
        <h3 className="mb-[1vh] text-[3vh] text-purple-70 font-bold">
          Playlist 🎵
        </h3>
        <Swiper ref={swiperRef} loop={true} slidesPerView="auto">
          {MUSIC_INFO.map(({ title, id }, index) => (
            <SwiperSlide key={index}>
              <section className="flex flex-col gap-[1.2vh] w-[54vh] text-black-50 text-[1.5vh] leading-[2.3vh]">
                <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
                  {title}
                </h4>
                <Youtube
                  videoId={id}
                  className="w-fit h-fit"
                  iframeClassName="max-w-[54vh]"
                />
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          onClick={handlePrev}
          role="button"
          title="이전으로"
          className="absolute top-1/2 -left-[1vh] w-[2vh] h-[2vh] bg-no-repeat bg-contain bg-center bg-[url('/assets/icon/button_prev.png')] drop-shadow-swiper-button cursor-pointer z-40"
        />
        <div
          onClick={handleNext}
          role="button"
          title="다음으로"
          className="absolute top-1/2 -right-[1.5vh] w-[2vh] h-[2vh] bg-no-repeat bg-contain bg-center bg-[url('/assets/icon/button_next.png')] drop-shadow-swiper-button cursor-pointer z-40"
        />
      </div>
    </Window>
  );
}

const MUSIC_INFO = [
  { title: '🎵 NewJeans - Attention', id: 'js1CtxSY38I' },
  { title: '🎵 백예린 - Square', id: '4iFP_wd6QU8' },
  { title: '🎵 페퍼톤스 - FILM LOVE (Feat. 스텔라장)', id: 'FN7FreEG6tM' },
  { title: '🎵 Offing - Birthday Harlem', id: 'GfbHmGzC-Gs' },
  { title: '🎵 Day6 (Even of Day) - 우린', id: '7mdHYSX7jbU' },
  { title: '🎵 Zac Efron, Zendaya - Rewrite The Stars', id: 'gdjR2lvIfJ4' },
  { title: '🎵 The Volunteers - Summer', id: '13EWqjMqkiY' },
  { title: '🎵 크르르 - 이방인', id: '6xypwQF7yis' },
  { title: '🎵 새소년 - 난춘', id: 'KsznX5j2oQ0' },
];

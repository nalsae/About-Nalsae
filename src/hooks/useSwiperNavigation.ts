import { useRef, useCallback } from 'react';

import { SwiperRef } from 'swiper/react';

const useSwiperNavigation = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.slideNext();
  }, []);

  return { swiperRef, handlePrev, handleNext };
};

export default useSwiperNavigation;

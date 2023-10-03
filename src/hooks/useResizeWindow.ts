import { useEffect, useRef } from 'react';

const useResizeWindow = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const div = divRef.current;
    const section = sectionRef.current;

    const observer = new ResizeObserver(() => {
      if (div && section) div.style.width = section.style.width;
    });

    section && observer.observe(section);
  }, []);

  return { divRef, sectionRef };
};

export default useResizeWindow;

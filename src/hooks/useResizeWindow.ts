import { useEffect, useRef } from 'react';

import useWindowStore, { Titles } from '@/stores/windowStore';

const useResizeWindow = (title: Titles) => {
  const divRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { deleteTask, minimize, toggleSize, close } = useWindowStore();

  useEffect(() => {
    const div = divRef.current;
    const section = sectionRef.current;

    const observer = new ResizeObserver(() => {
      if (div && section) div.style.width = section.style.width;
    });

    section && observer.observe(section);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLButtonElement)) return;

    const title = event.target.closest('ul')?.dataset.title as Titles;

    if (event.target.title === '최소화') minimize(title);

    if (event.target.title === '최대화') toggleSize(title);

    if (event.target.title === '닫기') {
      close(title);
      deleteTask(title);
    }
  };

  const handleDoubleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) return;

    toggleSize(title);
  };

  return { divRef, sectionRef, handleClick, handleDoubleClick };
};

export default useResizeWindow;

import { useState, useRef } from 'react';

const useDragWindow = () => {
  const [originPosition, setOriginPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ left: 0, top: 0 });

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) return;

    event.target.style.zIndex = '10';

    const ghostImage = new Image();
    ghostImage.src = '/assets/img/ghost.png';
    event.dataTransfer.setDragImage(ghostImage, 40, 40);

    const originPosition = {
      x: event.target.offsetLeft,
      y: event.target.offsetTop,
    };
    const mousePosition = {
      x: event.clientX,
      y: event.clientY,
    };

    setOriginPosition(originPosition);
    setMousePosition(mousePosition);
  };

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) return;

    const currentPosition = {
      top: event.target.offsetTop + event.clientY - mousePosition.y,
      left: event.target.offsetLeft + event.clientX - mousePosition.x,
    };
    const newMousePosition = {
      x: event.clientX,
      y: event.clientY,
    };

    setCurrentPosition(currentPosition);
    setMousePosition(newMousePosition);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) =>
    event.preventDefault();

  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    const screen = document.getElementById('SCREEN');
    const taskbar = document.getElementById('TASK_BAR');
    const window = event.target;

    if (screen && taskbar && window instanceof HTMLDivElement) {
      window.style.zIndex = '0';

      const { top, bottom, left, right } = screen.getBoundingClientRect();
      const { height } = taskbar.getBoundingClientRect();
      const {
        top: windowTop,
        bottom: windowBottom,
        left: windowLeft,
        right: windowRight,
      } = window.getBoundingClientRect();

      if (
        top > windowTop ||
        bottom < windowBottom - height ||
        left > windowLeft ||
        right < windowRight
      ) {
        const restoredPosition = {
          left: originPosition.x,
          top: originPosition.y,
        };

        setCurrentPosition(restoredPosition);
      }
    }
  };

  return {
    currentPosition,
    handleDragStart,
    handleDrag,
    handleDragOver,
    handleDragEnd,
  };
};

export default useDragWindow;

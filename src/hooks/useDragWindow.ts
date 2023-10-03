import { useSpring } from 'react-spring';
import { useDrag } from '@use-gesture/react';

const useDragWindow = () => {
  const position = useSpring({ x: 0, y: 0 });
  const setPosition = useDrag(({ offset: [x, y] }) => {
    position.x.set(x);
    position.y.set(y);
  });

  return { position, setPosition };
};

export default useDragWindow;

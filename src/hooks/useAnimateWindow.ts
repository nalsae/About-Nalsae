import { useEffect } from 'react';

import { useAnimate } from 'framer-motion';

const useAnimateWindow = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    });
  }, []);

  return { scope };
};

export default useAnimateWindow;

'use client';

import { motion } from 'framer-motion';

export default function GuideMessage() {
  return (
    <div className="absolute top-[22.4vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[2vh]">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="text-[5vh] font-bold text-gradient">
        Click Here
      </motion.p>
      <motion.div
        initial={{ y: 0, opacity: 0, rotate: 90 }}
        animate={{ y: 12, opacity: 1, rotate: 90 }}
        transition={{
          ease: 'easeIn',
          y: { repeat: Infinity, repeatType: 'reverse', duration: 0.5 },
          opacity: { duration: 1 },
        }}
        className="w-full h-full text-[6.5vh] text-center text-gradient rotate-90">
        &#187;
      </motion.div>
    </div>
  );
}

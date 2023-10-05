'use client';

import { motion } from 'framer-motion';

import useOpenWindow from '@/hooks/useOpenWindow';

import Window from '@/components/Window';

import { ALBUM_CONTENTS } from '@/constants/contents';

export default function Album() {
  const { handleDoubleClick } = useOpenWindow();

  return (
    <Window title="Album" type="folder">
      <div className="flex flex-wrap gap-[1.5vh] my-[2.8vh] mx-[3.2vh]">
        {ALBUM_CONTENTS.map((name, index) => {
          const bgUrl = name.endsWith('1')
            ? "bg-[url('/assets/icon/photo_pink.png')]"
            : "bg-[url('/assets/icon/photo_white.png')]";

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-[1vh] text-purple-50 text-[1.2vh] font-bold">
              <button
                onDoubleClick={handleDoubleClick}
                type="button"
                data-window-title={name}
                data-url={bgUrl}
                className={`w-[4.5vh] h-[5.7vh] bg-no-repeat bg-contain bg-center drop-shadow-icon-small ${bgUrl}`}
              />
              <h3 className="w-[8vh] text-center leading-[1.5vh]">{name}</h3>
            </motion.div>
          );
        })}
      </div>
    </Window>
  );
}

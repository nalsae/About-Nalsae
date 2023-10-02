'use client';

import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(id);
  }, []);

  const year = String(time.getFullYear()).slice(2);
  const month = time.getMonth() + 1;
  const date = String(time.getDate()).padStart(2, '0');

  return (
    <div className="flex flex-col justify-center items-center gap-[0.5vh] h-full px-[1.8vh] border-l-[0.5vh] border-purple-30">
      <p className="text-[2.1vh] text-purple-50 leading-[2.1vh]">
        {time.toLocaleTimeString().slice(0, -3)}
      </p>
      <p className="text-[1.7vh] text-purple-30 leading-[1.7vh]">{`${year}.${month}.${date}`}</p>
    </div>
  );
}

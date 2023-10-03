import Image from 'next/image';

import Window from '@/components/Window';

import { BACK_END_STACKS_INFO } from '@/constants/contents';

export default function BackEnd() {
  return (
    <Window title="Back-End" type="page">
      <div className="flex flex-col items-start gap-[2vh] max-w-[60vh] px-[3.3vh] py-[3vh] mx-auto">
        <h3 className="mb-[1vh] text-[3vh] text-purple-70 font-bold">
          Back-End 👨‍💻
        </h3>
        <section className="flex flex-col gap-[3vh] text-black-50 text-[1.5vh] leading-[2.3vh]">
          {BACK_END_STACKS_INFO.map((stacks, index) => (
            <div key={index} className="flex flex-wrap items-end gap-[2vh]">
              {stacks.map(({ name, imgUrl }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-[0.8vh]">
                  <Image
                    src={imgUrl}
                    alt=""
                    width={48}
                    height={48}
                    style={{ height: 'auto' }}
                    className="min-w-[5vh] min-h-[5vh] object-none"
                  />
                  <h4 className="w-fit px-[0.6vh] py-[0.2vh] border-[0.4vh] border-purple-30 text-[1.3vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
                    {name}
                  </h4>
                </div>
              ))}
            </div>
          ))}
        </section>
      </div>
    </Window>
  );
}

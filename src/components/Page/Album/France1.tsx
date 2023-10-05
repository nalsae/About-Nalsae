import Image from 'next/image';

import Window from '@/components/Window';

export default function France1() {
  return (
    <Window title="France_1" type="page">
      <div className="flex justify-center px-[3.3vh] py-[3vh]">
        <Image
          src="/assets/img/photo_france_1.JPG"
          alt="에펠탑 사진"
          width="1180"
          height="562"
          priority
        />
      </div>
    </Window>
  );
}

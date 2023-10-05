import Image from 'next/image';

import Window from '@/components/Window';

export default function France2() {
  return (
    <Window title="France_2" type="page">
      <div className="flex justify-center px-[3.3vh] py-[3vh]">
        <Image
          src="/assets/img/photo_france_2.JPG"
          alt="에펠탑과 나"
          width="340"
          height="562"
          priority
        />
      </div>
    </Window>
  );
}

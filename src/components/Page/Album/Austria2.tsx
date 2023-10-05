import Image from 'next/image';

import Window from '@/components/Window';

export default function Austria2() {
  return (
    <Window title="Austria_2" type="page">
      <div className="flex justify-center px-[3.3vh] py-[3vh]">
        <Image
          src="/assets/img/photo_austria_2.JPG"
          alt="할슈타트"
          width="1180"
          height="562"
          priority
        />
      </div>
    </Window>
  );
}

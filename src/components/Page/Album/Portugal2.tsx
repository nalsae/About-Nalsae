import Image from 'next/image';

import Window from '@/components/Window';

export default function Portugal2() {
  return (
    <Window title="Portugal_2" type="page">
      <div className="flex justify-center px-[3.3vh] py-[3vh]">
        <Image
          src="/assets/img/photo_portugal_2.JPG"
          alt="포르투 전경"
          width="1180"
          height="562"
          priority
        />
      </div>
    </Window>
  );
}

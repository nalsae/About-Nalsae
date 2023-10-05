import Image from 'next/image';

import Window from '@/components/Window';

export default function Switzerland1() {
  return (
    <Window title="Switzerland_1" type="page">
      <div className="flex justify-center px-[3.3vh] py-[3vh]">
        <Image
          src="/assets/img/photo_switzerland_1.JPG"
          alt="융프라우 정상"
          width="1180"
          height="562"
          priority
        />
      </div>
    </Window>
  );
}

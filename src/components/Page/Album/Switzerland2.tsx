import Image from 'next/image';

import Window from '@/components/Window';

export default function Switzerland2() {
  return (
    <Window title="Switzerland_2" type="page">
      <div className="flex justify-center px-[3.3vh] py-[3vh]">
        <Image
          src="/assets/img/photo_switzerland_2.jpg"
          alt="뮈렌 통나무 위에서"
          width="1180"
          height="562"
          priority
        />
      </div>
    </Window>
  );
}

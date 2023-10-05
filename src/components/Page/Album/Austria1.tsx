import Image from 'next/image';

import Window from '@/components/Window';

export default function Austria1() {
  return (
    <Window title="Austria_1" type="page">
      <div className="flex justify-center px-[3.3vh] py-[3vh]">
        <Image
          src="/assets/img/photo_austria_1.jpg"
          alt="쇤부른 궁전"
          width="1180"
          height="562"
          priority
        />
      </div>
    </Window>
  );
}

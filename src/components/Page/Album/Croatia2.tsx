import Image from 'next/image';

import Window from '@/components/Window';

export default function Croatia2() {
  return (
    <Window title="Croatia_2" type="page">
      <div className="flex justify-center px-[3.3vh] py-[3vh]">
        <Image
          src="/assets/img/photo_croatia_2.jpg"
          alt="플리트비체"
          width="1180"
          height="562"
          priority
        />
      </div>
    </Window>
  );
}

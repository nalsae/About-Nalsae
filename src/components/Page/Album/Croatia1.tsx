import Image from 'next/image';

import Window from '@/components/Window';

export default function Croatia1() {
  return (
    <Window title="Croatia_1" type="page">
      <div className="flex justify-center px-[3.3vh] py-[3vh]">
        <Image
          src="/assets/img/photo_croatia_1.jpg"
          alt="흐바르 섬"
          width="1180"
          height="562"
          priority
        />
      </div>
    </Window>
  );
}

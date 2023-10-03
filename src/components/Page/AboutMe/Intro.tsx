import Image from 'next/image';

import Window from '@/components/Window';

export default function Intro() {
  return (
    <Window title="Intro" type="page">
      <div className="flex flex-col items-center gap-[3vh] max-w-[60vh] px-[3.3vh] py-[3vh] mx-auto">
        <h3 className="text-purple-70 font-bold">
          <span className="block mb-[1vh] text-[3vh]">안녕하세요!</span>
          <span className="text-purple-50 text-[2.3vh] leading-[3.2vh]">
            <span>UX와 성능,</span> 두 마리 토끼를 잡는 프론트엔드 개발자
            <span className="text-purple-70"> 김민석</span>입니다.
          </span>
        </h3>
        <Image
          onClick={() => window.open('/assets/img/profile.png')}
          src="/assets/img/profile.png"
          alt="프로필 이미지"
          width={360}
          height={360}
          style={{ width: '20vh' }}
          className="shadow-page-light cursor-pointer"
        />
        <section className="flex flex-col gap-[3vh] text-black-50 text-[1.5vh] leading-[2.3vh]">
          <h3 className="w-fit px-[1vh] py-[0.7vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark">
            🙋‍♂️ Introduction
          </h3>
          <div>
            <h4 className="mb-[1vh] text-[1.8vh] text-purple-70 font-bold">
              접근성을 고민하고 준수합니다.
            </h4>
            <p className="indent-[1vh]">
              {' '}
              프론트엔드 개발자로서 사용자의 관점을 고려하여 UI와 UX를 개선하고,
              웹 접근성을 준수하는 마크업을 작성합니다. 프로젝트 중 Web Vital
              지표를 측정하여{' '}
              <span className="pl-[0.3vh] emphasis">
                데스크탑 환경에서의 성능을 개선
              </span>
              한 경험이 있습니다.
            </p>
          </div>
          <div>
            <h4 className="mb-[1vh] text-[1.8vh] text-purple-70 font-bold">
              아름다운 디자인과 코드를 추구합니다.
            </h4>
            <p className="mb-[0.5vh] indent-[1vh]">
              첫째, 아름다운 디자인을 추구합니다. 디자인에 관심이 깊어 디자인
              툴을 능숙하게 다룰 수 있고 UI와 UX 관련 아티클을 학습합니다.
              프로젝트 진행 시 Atomic Design 방식의{' '}
              <span className="pl-[0.3vh] pr-[0.2vh] emphasis">
                디자인 시안 제작과 디자인 시스템 구축을 담당
              </span>
              하여 DX를 향상시켰습니다.
            </p>
            <p className="indent-[1vh]">
              둘째, 아름다운 코드를 추구합니다. 기능 구현을 완료하더라도
              유지보수의 용이성을 위해 리팩토링을 반복합니다. 구체적으로{' '}
              <span className="pl-[0.3vh] pr-[0.2vh] emphasis">
                가독성, 변수와 함수의 네이밍, 성능 최적화
              </span>{' '}
              등을 고민하고 개선합니다. 마무리한 프로젝트도 리팩토링하여
              유지보수를 수행합니다.
            </p>
          </div>
          <div>
            <h4 className="mb-[1vh] text-[1.8vh] text-purple-70 font-bold">
              기록과 회고를 작성합니다.
            </h4>
            <p className="indent-[1vh]">
              경험한 내용을 문서로 정리하는 습관이 있기 때문에{' '}
              <span className="pl-[0.3vh] pr-[0.2vh] emphasis">
                개발 과정 중 발생한 문제의 원인과 해결 과정, 결과
              </span>
              를 문서화 하는 편입니다. 새로운 기술 스택을 학습할 때면 지식을
              빠르게 체득하기 위해 Notion이나 Velog 등에 기록하며 학습합니다.
            </p>
          </div>
          <div>
            <h4 className="mb-[1vh] text-[1.8vh] text-purple-70 font-bold">
              커뮤니케이션을 즐깁니다.
            </h4>
            <p className="indent-[1vh]">
              협업 시 동료들과 소통하고{' '}
              <span className="pl-[0.3vh] pr-[0.2vh] emphasis">
                적극적으로 의견을 피력하며 기획 및 디자인 단계에도 참여
              </span>
              합니다. PR 기능을 적극 활용하여{' '}
              <span className="pl-[0.3vh] pr-[0.2vh] emphasis">
                동료들과 서로의 코드를 리뷰
              </span>
              하고, 개선점을 발견하면 상대방의 기분을 상하지 않게끔 전달합니다.
            </p>
          </div>
        </section>
      </div>
    </Window>
  );
}

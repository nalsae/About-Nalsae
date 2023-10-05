import Window from '@/components/Window';

export default function Activity() {
  return (
    <Window title="Activity" type="page">
      <div className="flex flex-col items-start gap-[2vh] max-w-[60vh] px-[3.3vh] py-[3vh] mx-auto">
        <h3 className="mb-[1vh] text-[3vh] text-purple-70 font-bold">
          Activity 🏄‍♂️
        </h3>
        <section className="flex flex-col gap-[2vh] text-black-50 text-[1.5vh] leading-[2.3vh]">
          <div>
            <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
              📝 Next.js 문서 번역
            </h4>
            <p className="mb-[0.4vh] text-purple-50 font-bold">2023.07</p>
            <p className="indent-[1vh]">
              <span className="pl-[0.3vh] emphasis">
                Next.js 공식 문서 한글화 작업
              </span>
              에 참여했습니다. 공식 문서를 탐독하며 학습하고 오픈 소스
              라이브러리에 기여하는 뜻깊은 경험을 할 수 있었습니다.
            </p>
          </div>
          <div>
            <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
              👨‍💻 FE Conf 2022
            </h4>
            <p className="mb-[0.4vh] text-purple-50 font-bold">2022.10</p>
            <p className="indent-[1vh]">
              <span className="pl-[0.3vh] emphasis">FE Conf 2022를 참관</span>
              하며 새로운 기술 트렌드를 파악하고 연사 분들께서 전달해주시는
              유익한 개발 경험을 습득할 수 있었습니다.
            </p>
          </div>
        </section>
      </div>
    </Window>
  );
}

import Window from '@/components/Window';

export default function Education() {
  return (
    <Window title="Education" type="page">
      <div className="flex flex-col items-start gap-[2vh] max-w-[60vh] px-[3.3vh] py-[3vh] mx-auto">
        <h3 className="mb-[1vh] text-[3vh] text-purple-70 font-bold">
          Education 📚
        </h3>
        <section className="flex flex-col gap-[2vh] text-black-50 text-[1.5vh] leading-[2.3vh]">
          <div>
            <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
              📝 코드스테이츠 프론트엔드
            </h4>
            <p className="mb-[0.4vh] text-purple-50 font-bold">
              2023.04 ~ 2023.10
            </p>
            <p className="indent-[1vh]">
              코드스테이츠 주관 프론트엔드 개발자 부트캠프를 수료했습니다.
              부트캠프 내에서{' '}
              <span className="pl-[0.3vh] emphasis">
                자료구조 & 알고리즘 스터디를 운영
              </span>
              하고, 팀원들과 성공적으로 팀 프로젝트를 수행하여 최종 발표 날{' '}
              <span className="pl-[0.3vh] emphasis">전체 3위</span> 안에
              들었습니다.
            </p>
          </div>
          <div>
            <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
              📝 커넥to 프론트엔드
            </h4>
            <p className="mb-[0.4vh] text-purple-50 font-bold">
              2022.07 ~ 2022.12
            </p>
            <p className="indent-[1vh]">
              제로베이스 주관 커넥to 프론트엔드 부트캠프를 수료했습니다.{' '}
              <span className="pl-[0.3vh] emphasis">
                프론트엔드 관련 기술 스택을 학습
              </span>
              하고, 팀원들과 성공적으로 다수의 팀 프로젝트를 수행했습니다.
            </p>
          </div>
          <div>
            <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
              👨‍🎓 건국대학교 졸업
            </h4>
            <p className="mb-[0.4vh] text-purple-50 font-bold">
              2015.03 ~ 2022.02
            </p>
            <p className="indent-[1vh]">
              총점 4.5 기준 4.15의 취득 학점으로{' '}
              <span className="pl-[0.3vh] emphasis">
                국어국문학과와 휴먼 ICT 연계전공
              </span>
              의 학사 학위를 받았습니다.{' '}
            </p>
          </div>
        </section>
      </div>
    </Window>
  );
}

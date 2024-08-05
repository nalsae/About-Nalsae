'use client';

import Link from 'next/link';

import Window from '@/components/Window';

export default function Experience() {
  return (
    <Window title="Experience" type="page">
      <div className="flex flex-col items-start gap-[2vh] max-w-[60vh] px-[3.3vh] py-[3vh] mx-auto">
        <h3 className="mb-[1vh] text-[3vh] text-purple-70 font-bold">
          Experience 💼
        </h3>
        <section className="flex flex-col gap-[2vh] text-black-50 text-[1.5vh] leading-[2.3vh]">
          <div>
            <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
              👨‍💻 NHN PAYCO
            </h4>
            <p className="mb-[0.4vh] text-purple-50 font-bold">
              2024.01 ~ 재직 중
            </p>
            <p className="indent-[1vh]">
              PAYCO 가맹점 이벤트 페이지 개발 및 유지보수
            </p>
            <p className="indent-[1vh]">
              PAYCO 앱 내 웹뷰 페이지 개발 및 유지보수
            </p>
            <p className="indent-[1vh]">
              PAYCO 서비스 관련 백오피스 페이지 개발 및 유지보수
            </p>
            <p className="indent-[1vh]">
              마크업 제작 프로세스 자동화 웹 애플리케이션 개발 및 유지보수
              <ul className="pl-2">
                <li>- 주도적으로 프로토타입 제작 후 실무 도입 성공</li>
                <li>- 외주 비용 100% 절감</li>
                <li>
                  - 기존 프로세스 대비{' '}
                  <span className="pl-[0.3vh] emphasis">
                    제작 시간 70% 이상 감축
                  </span>
                </li>
                <li>
                  - 기존 프로세스 대비{' '}
                  <span className="pl-[0.3vh] emphasis">
                    실수 발생률 90% 이상 감축
                  </span>
                </li>
              </ul>
            </p>
            <div className="px-[1.4vh] py-[1vh] mt-[0.8vh] rounded-[1vh] emphasis">
              <h5 className="pb-[0.6vh] mb-[0.6vh] border-b-[1px] border-dashed font-semibold">
                관련 블로그 게시글
              </h5>
              <ul className="flex flex-col gap-[0.5vh] text-[1.5vh]">
                <li>
                  <Link
                    href="https://velog.io/@nalsae/%EC%97%A5-%EC%97%AC%EA%B8%B0%EC%97%90-%ED%9D%B0-%EC%84%A0%EC%9D%B4-%EC%99%9C"
                    target="_blank"
                    rel="noopenner noreferrer">
                    👉 엥? 여기에 흰 선이 왜??
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://velog.io/@nalsae/input-%EC%9A%94%EC%86%8C%EC%97%90-%EC%9E%85%EB%A0%A5%ED%95%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%8C%8C%EC%9D%BC-%EB%AA%85-%EB%AF%B8%EB%A6%AC%EB%B3%B4%EA%B8%B0-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-feat.-%EC%BB%A4%EC%8A%A4%ED%84%B0%EB%A7%88%EC%9D%B4%EC%A7%95"
                    target="_blank"
                    rel="noopenner noreferrer">
                    👉 type이 file인 &lt;input&gt;의 파일 명 가져오기 & 이미지
                    미리보기 구현하기! (feat. 커스터마이징)
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://velog.io/@nalsae/Blob%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%B4%EC%84%9C-%ED%8C%8C%EC%9D%BC-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-%EA%B8%B0%EB%8A%A5%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%9E%90"
                    target="_blank"
                    rel="noopenner noreferrer">
                    👉 Blob을 활용해서 파일 다운로드 기능을 구현해보자!
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://velog.io/@nalsae/offsetX-offsetLeft-%ED%97%B7%EA%B0%88%EB%A6%AC%EB%8A%94-%EC%9C%84%EC%B9%98-%EC%A0%95%EB%B3%B4-%ED%99%95%EC%8B%A4%ED%95%98%EA%B2%8C-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0"
                    target="_blank"
                    rel="noopenner noreferrer">
                    👉 offsetX? offsetLeft? 헷갈리는 DOM API 관련 위치 정보
                    확실하게 정리하기!
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://velog.io/@nalsae/%EB%BD%80%EB%AF%B9formik-%EB%BD%80%EA%B0%9C%EA%B8%B0-feat.-Yup-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC"
                    target="_blank"
                    rel="noopenner noreferrer">
                    👉 뽀믹(formik) 뽀개기 (feat. Yup 라이브러리)
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://velog.io/@nalsae/%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8%EC%9D%84-%ED%95%B4%EB%8F%84-%EC%9E%85%EB%A0%A5-%EA%B0%92%EC%9D%B4-%EB%82%A8%EC%95%84%EC%9E%88%EB%8A%94-Form-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-with-formik"
                    target="_blank"
                    rel="noopenner noreferrer">
                    👉 새로고침을 해도 입력 값이 유지되는 Form 구현하기! (with
                    formik)
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://velog.io/@nalsae/formik-useref"
                    target="_blank"
                    rel="noopenner noreferrer">
                    👉 Formik 라이브러리에서 useRef 활용하기 대작전!
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Window>
  );
}

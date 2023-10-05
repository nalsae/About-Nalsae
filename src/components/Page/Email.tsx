'use client';

import { useRef } from 'react';

import emailjs from '@emailjs/browser';

import Window from '@/components/Window';

export default function Email() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!(formRef.current instanceof HTMLFormElement)) return;

    const form = formRef.current;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_KEY as string,
      )
      .then(
        (result) => {
          alert('성공적으로 이메일이 전송되었습니다.');
          form.reset();
        },
        (error) => {
          console.log(error.text);
          alert('이메일이 전송이 실패되었습니다.');
        },
      );
  };

  return (
    <Window title="Email" type="page">
      <div className="flex flex-col items-start gap-[2vh] max-w-[60vh] px-[3.3vh] py-[3vh] mx-auto">
        <h3 className="mb-[1vh] text-[3vh] text-purple-70 font-bold">
          Send an Email 📫
        </h3>
        <section className="flex flex-col gap-[2vh] text-black-50 text-[1.5vh] leading-[2.3vh]">
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="flex flex-col gap-[2vh] w-full min-w-[40vh] max-w-full">
            <div className="flex flex-col gap-[1vh]">
              <label
                htmlFor="userName"
                className="w-fit px-[1vh] py-[0.7vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
                이름
              </label>
              <input
                required
                id="userName"
                name="userName"
                type="text"
                placeholder="보내실 이름을 입력하세요."
                className="px-[0.8vh] py-[0.4vh] border-[0.4vh] border-purple-30 shadow-input-light placeholder:text-gray-50"
              />
            </div>
            <div className="flex flex-col gap-[1vh]">
              <label
                htmlFor="userEmail"
                className="w-fit px-[1vh] py-[0.7vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
                회신 이메일
              </label>
              <input
                required
                id="userEmail"
                name="userEmail"
                type="text"
                placeholder="답장 받으실 이메일 주소를 입력하세요."
                className="px-[0.8vh] py-[0.4vh] border-[0.4vh] border-purple-30 shadow-input-light placeholder:text-gray-50"
              />
            </div>
            <div className="flex flex-col gap-[1vh]">
              <label
                htmlFor="title"
                className="w-fit px-[1vh] py-[0.7vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
                제목
              </label>
              <input
                required
                id="title"
                name="title"
                type="text"
                placeholder="제목을 입력하세요."
                className="px-[0.8vh] py-[0.4vh] border-[0.4vh] border-purple-30 shadow-input-light placeholder:text-gray-50"
              />
            </div>
            <div className="flex flex-col gap-[1vh]">
              <label
                htmlFor="contents"
                className="w-fit px-[1vh] py-[0.7vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
                내용
              </label>
              <textarea
                required
                id="contents"
                name="contents"
                placeholder="내용을 입력하세요."
                className="h-[10vh] px-[0.8vh] py-[0.4vh] border-[0.4vh] border-purple-30 shadow-input-light placeholder:text-gray-50 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-fit px-[1.7vh] py-[1.4vh] mt-[0.8vh] mx-auto bg-purple-50 text-[2vh] text-white-10 font-bold shadow-page-light">
              전송하기
            </button>
          </form>
        </section>
      </div>
    </Window>
  );
}

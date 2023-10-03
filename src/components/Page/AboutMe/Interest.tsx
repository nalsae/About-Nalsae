import Window from '@/components/Window';

export default function Interest() {
  return (
    <Window title="Interest" type="page">
      <div className="flex flex-col items-start gap-[2vh] max-w-[60vh] px-[3.3vh] py-[3vh] mx-auto">
        <h3 className="mb-[1vh] text-[3vh] text-purple-70 font-bold">
          Interest 💖
        </h3>
        <section className="flex flex-col gap-[1vh] text-black-50 text-[1.5vh] leading-[2.3vh]">
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            💻 UI & UX
          </h4>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            ♿ Web Accesibility
          </h4>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            ✨ Interactive Web
          </h4>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            🌳 Refactoring
          </h4>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            🎨 Design
          </h4>
          <h4 className="w-fit px-[1vh] py-[0.7vh] mb-[1vh] border-[0.4vh] border-purple-30 text-[1.8vh] text-purple-70 font-bold shadow-page-dark whitespace-nowrap">
            💫 Animation
          </h4>
        </section>
      </div>
    </Window>
  );
}

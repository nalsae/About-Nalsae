interface WindowProps {
  title: string;
  children?: React.ReactNode;
}

export default function Window({ title, children }: WindowProps) {
  return (
    <section className="absolute top-[3.4vh] left-[14.5vh] min-w-[27vh] max-h-[48vh] border-[0.5vh] border-purple-30 bg-white-10 shadow-window resize overflow-auto">
      <div className="absolute top-0 left-0 flex justify-between items-center w-full pl-[0.8vh] pr-[0.4vh] border-b-[0.5vh] border-purple-30 bg-purple-10">
        <h2 className="text-purple-70 text-[1.3vh] font-bold">{title}</h2>
        <ul className="flex items-center gap-[0.4vh] py-[0.3vh]">
          {BUTTONS_INFO.map(({ title, iconUrl }, index) => (
            <li key={index} className="w-[2.1vh] h-[2.1vh]">
              <button
                title={title}
                className={`w-full h-full bg-no-repeat bg-contain bg-center ${iconUrl}`}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-[3.2vh] mt-[5.6vh] mx-[3.2vh]">
        {children}
      </div>
    </section>
  );
}

const BUTTONS_INFO = [
  { title: '최소화', iconUrl: "bg-[url('/assets/icon/button_minimize.png')]" },
  { title: '최대화', iconUrl: "bg-[url('/assets/icon/button_maximize.png')]" },
  { title: '닫기', iconUrl: "bg-[url('/assets/icon/button_close.png')]" },
];

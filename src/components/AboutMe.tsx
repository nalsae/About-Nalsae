import Window from './Window';

export default function AboutMe() {
  return (
    <Window title="About Me">
      {ICONS_STYLE.map(({ name, iconUrl }, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-[0.5vh] text-purple-50 text-[1.2vh] font-bold">
          <button
            type="button"
            className={`w-[4.5vh] h-[5.7vh] bg-no-repeat bg-contain bg-center drop-shadow-icon-small ${iconUrl}`}
          />
          <h3>{name}</h3>
        </div>
      ))}
    </Window>
  );
}

const ICONS_STYLE = [
  { name: 'Intro', iconUrl: "bg-[url('/assets/icon/note_mint.png')]" },
  { name: 'Contact', iconUrl: "bg-[url('/assets/icon/note_white.png')]" },
  { name: 'Activity', iconUrl: "bg-[url('/assets/icon/note_mint.png')]" },
  { name: 'Education', iconUrl: "bg-[url('/assets/icon/note_white.png')]" },
  { name: 'Interest', iconUrl: "bg-[url('/assets/icon/heart_purple.png')]" },
];

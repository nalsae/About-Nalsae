import Taskbar from './Taskbar';

export default function Window() {
  return (
    <div className="absolute top-[6.7vh] left-1/2 -translate-x-1/2 w-[118vh] h-[55.8vh] rounded-lg bg-[url('/assets/img/bg_window.png')] shadow-outer overflow-hidden">
      <Taskbar />
    </div>
  );
}

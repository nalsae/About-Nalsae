export default function Taskbar() {
  return (
    <section className="fixed bottom-0 flex items-center w-full h-[48px] px-3 pb-[2px] border-t-[3px] border-[#5a5a5a] bg-[#dfdfe2] text-xl font-bold">
      <div>로고</div>
      <ul className="flex mr-auto">
        <li>폴더 1</li>
        <li>폴더 2</li>
        <li>폴더 3</li>
        <li>폴더 4</li>
      </ul>
      <div>시계</div>
    </section>
  );
}

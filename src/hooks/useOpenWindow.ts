import useWindowStore, { Titles } from '@/stores/windowStore';

const useOpenWindow = () => {
  const { tasks, addTask, open, restore } = useWindowStore();

  const handleDoubleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof HTMLButtonElement) {
      const title = event.target.dataset.windowTitle as Titles;

      open(title);
      addTask(title);
      restore(title);
    }
  };

  return { tasks, handleDoubleClick };
};

export default useOpenWindow;

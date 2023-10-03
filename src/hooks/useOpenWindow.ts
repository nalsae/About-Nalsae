import useWindowStore from '@/stores/windowStore';

const useOpenWindow = (type: 'folder' | 'page') => {
  const { windows, open, restore } = useWindowStore();

  const handleDoubleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof HTMLButtonElement) {
      const name = event.target.dataset.windowName as string;
      const url = event.target.dataset.url as string;

      const newWindow = {
        type,
        name,
        url,
        isMinimized: false,
        isMaximized: false,
      };

      open(newWindow);
      restore(name);
    }
  };

  return { windows, handleDoubleClick };
};

export default useOpenWindow;

import useWindowStore from '@/stores/windowStore';

const useOpenWindow = (type: 'folder' | 'page') => {
  const { windows, open } = useWindowStore();

  const handleDoubleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof HTMLButtonElement) {
      const newWindow = {
        type,
        name: event.target.dataset.windowName as string,
        url: event.target.dataset.url as string,
        isMinimized: false,
        isMaximized: false,
      };

      open(newWindow);
    }
  };

  return { windows, handleDoubleClick };
};

export default useOpenWindow;

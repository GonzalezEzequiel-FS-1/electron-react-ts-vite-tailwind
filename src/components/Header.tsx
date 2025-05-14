import { useEffect, useRef } from "react";

const Header = () => {
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if(window.electron) {
      window.electron.onToggleTitlebar((show: boolean) => {
        if (show) {
          header.current?.classList.remove("hidden");
        } else {
          header.current?.classList.add("hidden");
        }
      });
    }
  }, []);

  return (
    <nav ref={header} className="h-11 dark:bg-main-dark bg-[#f7f7f7] z-10 drag p-1">
    </nav>
  );
};

export default Header;

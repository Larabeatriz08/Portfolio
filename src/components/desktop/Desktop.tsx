import { useState } from "react";

import Wallpaper from "./Wallpaper";
import TopBar from "./TopBar";
import DesktopGrid from "./DesktopGrid";
import AppWindow from "../window/AppWindow";

import { useSound } from "../../hooks/useSounds";
import type { AppId } from "../../types/desktop";

export default function Desktop() {
  const { play } = useSound();

  const [openedWindows, setOpenedWindows] = useState<AppId[]>([]);

  function handleOpen(id: string) {
    const app = id as AppId;

    play("open");

    setOpenedWindows((current) => {
      if (current.includes(app)) {
        return current;
      }

      return [...current, app];
    });
  }

  function handleClose(app: AppId) {
    play("close");

    setOpenedWindows((current) =>
      current.filter((window) => window !== app)
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B]">
      <Wallpaper />

      <TopBar />

     <section
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-8
          pt-20
        "
      >
        {openedWindows.length === 0 && (
          <DesktopGrid onOpen={handleOpen} />
        )}
</section>

      {openedWindows.map((app, index) => (
        <AppWindow
          key={app}
          app={app}
          zIndex={100 + index}
          onClose={() => handleClose(app)}
        />
      ))}
    </main>
  );
}
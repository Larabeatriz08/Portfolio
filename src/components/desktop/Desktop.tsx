import { useState } from "react";

import Wallpaper from "./Wallpaper";
import TopBar from "./TopBar";
import DesktopGrid from "./DesktopGrid";
import AppWindow from "../window/AppWindow";

export default function Desktop() {
  const [openedApp, setOpenedApp] = useState<string | null>(null);

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
        <DesktopGrid onOpen={setOpenedApp} />
      </section>

      {openedApp && (
        <AppWindow
          app={openedApp}
          onClose={() => setOpenedApp(null)}
        />
      )}
    </main>
  );
}
import Wallpaper from "./Wallpaper";
import TopBar from "./TopBar";
import DesktopGrid from "./DesktopGrid";

export default function Desktop() {
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
        <DesktopGrid />
      </section>
    </main>
  );
}
import Wallpaper from "./Wallpaper";

export default function Desktop() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      <Wallpaper />

      <div className="relative z-10 flex min-h-screen items-center justify-center">

        <h1 className="text-5xl font-bold text-white">
          LARA LIMA
        </h1>

      </div>

    </main>
  );
}
import { useEffect, useState } from "react";

export default function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const formatted = now.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });

      setTime(formatted);
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="
        absolute
        top-0
        left-0
        right-0
        z-20
        flex
        items-center
        justify-between
        border-b
        border-white/5
        bg-white/[0.03]
        px-8
        py-4
        backdrop-blur-xl
      "
    >
      <div className="flex items-center gap-3">

        <div className="h-2 w-2 rounded-full bg-pink-300" />

        <span className="font-semibold tracking-widest text-zinc-100">
          LARA LIMA
        </span>

      </div>

      <span className="text-sm text-zinc-400">
        {time}
      </span>
    </header>
  );
}
import { useEffect, useMemo, useState } from "react";

type Props = {
  onFinish: () => void;
};

const messages = [
  "Initializing kernel...",
  "Loading user interface...",
  "Loading fonts...",
  "Loading assets...",
  "Registering applications...",
  "Preparing workspace...",
  "Almost ready...",
];

export default function LoadingScreen({ onFinish }: Props) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [flash, setFlash] = useState(false);

  const time = useMemo(() => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  useEffect(() => {
  let timer: ReturnType<typeof setTimeout>;

  const animate = () => {
    setProgress((prev) => {
      let next = prev;

      if (prev < 15) {
        next += 1.2;
      } else if (prev < 40) {
        next += 0.9;
      } else if (prev < 70) {
        next += 0.55;
      } else if (prev < 90) {
        next += 0.30;
      } else if (prev < 98) {
        next += 0.12;
      } else {
        next += 0.05;
      }
      
      if (next >= 100) {
        next = 100;

        setFlash(true);

        setTimeout(() => {
          setFadeOut(true);
        }, 900);

        setTimeout(() => {
          onFinish();
        }, 1700);
      } else {
        timer = setTimeout(animate, 65);
      }

      return next;
    });
  };

  timer = setTimeout(animate, 65);

  return () => clearTimeout(timer);
}, [onFinish]);


  function currentMessage() {
  if (progress < 10) return messages[0];
  if (progress < 22) return messages[1];
  if (progress < 38) return messages[2];
  if (progress < 55) return messages[3];
  if (progress < 72) return messages[4];
  if (progress < 95) return messages[5];

  if (progress < 100) return messages[6];

  return "Session Started.";
}
  return (
    <main
      className={`
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      bg-[#09090B]
      transition-all
      duration-700
      ${fadeOut ? "opacity-0 scale-[1.01]" : "opacity-100 scale-100"}
      ${flash ? "brightness-110" : ""}
    `}
    >

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-[#09090B] to-black" />


      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,114,182,.08),transparent_65%)] animate-pulse" />


      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <section className="relative z-10 w-full max-w-xl px-8">

        <h1 className="text-center font-mono text-6xl font-black tracking-[0.18em] text-white">
          LaraOS
        </h1>

        <p className="mt-2 text-center text-zinc-500">
          Interactive Portfolio Experience
        </p>

        <div className="mt-14 flex justify-between font-mono text-sm text-zinc-400">

          <span>{currentMessage()}</span>

          <span>{Math.round(progress)}%</span>

        </div>

     
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">
        <div 
            className={`
              relative
              h-full
              rounded-full
              bg-gradient-to-r
              from-pink-300
              via-fuchsia-400
              to-pink-500
              transition-all
              duration-700
              ease-out

              ${
                progress > 90
                  ? "shadow-[0_0_20px_rgba(244,114,182,.8)]"
                  : ""
              }
            `}
            style={{
              width: `${progress}%`,
            }}
          >
            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-white/20
                animate-pulse
              "
  />
</div>
</div>

      

        <div className="mt-12 flex items-center justify-center gap-2">

          <span className="font-mono text-sm text-zinc-500">

            {progress === 100
              ? "✔ Session Started."
              : "Boot sequence running..."}

          </span>

          {progress !== 100 && (
            <span className="animate-pulse font-mono text-pink-300">
              ▋
            </span>
          )}

        </div>

      </section>


      <footer className="absolute bottom-8 flex w-full justify-between px-10 text-xs font-mono text-zinc-600">

        <span>Portfolio v1.0.0</span>

        <span>{time}</span>

      </footer>
    </main>
  );
}
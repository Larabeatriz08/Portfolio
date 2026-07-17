import { useEffect, useState } from "react";
import { useSound } from "../../hooks/useSounds";

type Props = {
  text: string;
  speed?: number;
};

export default function Typewriter({
  text,
  speed = 45,
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [finished, setFinished] = useState(false);

  const { play } = useSound();

  useEffect(() => {
    let index = 0;

    setDisplayed("");
    setFinished(false);

    const interval = setInterval(() => {
      index++;

      setDisplayed(text.slice(0, index));

      // toca um som a cada 2 letras
      if (index % 2 === 0) {
        play("typing", 0.08);
      }

      if (index >= text.length) {
        clearInterval(interval);
        setFinished(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <>
      {displayed}

      <span
        className={`
          ml-1
          inline-block
          h-[1em]
          w-[2px]
          rounded-full
          bg-gradient-to-b
          from-pink-200
          to-pink-500
          align-middle
          ${finished ? "cursor-blink" : ""}
        `}
      />
    </>
  );
}
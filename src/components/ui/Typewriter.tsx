import { useEffect, useState } from "react";
import { useSound } from "../../hooks/useSounds";

type Props = {
  text: string;
  speed?: number;
  sound?: boolean;
};

export default function Typewriter({
  text,
  speed = 45,
  sound = false,
}: Props) {
  const [displayed, setDisplayed] = useState("");

  const { play } = useSound();

  useEffect(() => {
    let index = 0;
    let mounted = true;

    setDisplayed("");

    const interval = setInterval(() => {
      if (!mounted) return;

      index++;

      setDisplayed(text.slice(0, index));

      if (
        mounted &&
        sound &&
        text[index - 1] !== " " &&
        index < text.length
      ) {
        play("typing", 0.05);
      }

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [text, speed, sound, play]);

  return (
    <>
      {displayed}

      <span
        className="
          ml-1
          inline-block
          h-[1em]
          w-[2px]
          rounded-full
          bg-gradient-to-b
          from-pink-200
          to-pink-500
          cursor-blink
          align-middle
        "
      />
    </>
  );
}
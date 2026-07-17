import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
};

export default function Typewriter({
  text,
  speed = 45,
}: Props) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;

      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

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
import clickSound from "../assets/sounds/click.mp3";
import openSound from "../assets/sounds/open.mp3";
import closeSound from "../assets/sounds/close.mp3";
import typingSound from "../assets/sounds/typing.mp3";

const audioMap = {
  click: clickSound,
  open: openSound,
  close: closeSound,
  typing: typingSound,
};

export function useSound() {
  function play(name: keyof typeof audioMap, volume = 0.2) {
    const audio = new Audio(audioMap[name]);

    audio.volume = volume;

    audio.play().catch(() => {});
  }

  return { play };
}
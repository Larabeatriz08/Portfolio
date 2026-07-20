import clickSound from "../assets/sounds/click.mp3";
import typingSound from "../assets/sounds/typing.mp3";

const clickAudio = new Audio(clickSound);
const typingAudio = new Audio(typingSound);

export function useSound() {
  function play(
    name: "click" | "typing",
    volume = 0.2
  ) {
    const audio =
      name === "click"
        ? clickAudio
        : typingAudio;

    audio.volume = volume;

    audio.currentTime = 0;

    audio.play().catch(() => {});
  }

  return { play };
}
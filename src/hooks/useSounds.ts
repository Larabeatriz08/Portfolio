import clickSound from "../assets/sounds/click.mp3";
import typingSound from "../assets/sounds/typing.mp3";

const clickAudio = new Audio(clickSound);

export function useSound() {
  function playClick(volume = 0.2) {
    clickAudio.volume = volume;
    clickAudio.currentTime = 0;
    clickAudio.play().catch(() => {});
  }

  function createTypingAudio(volume = 0.05) {
    const audio = new Audio(typingSound);

    audio.volume = volume;

    return audio;
  }

  return {
    playClick,
    createTypingAudio,
  };
}
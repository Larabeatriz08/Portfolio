import clickSound from "../assets/sounds/click.mp3";
import typingSound from "../assets/sounds/typing.mp3";

const clickAudio = new Audio(clickSound);

export function useSound() {
  function playClick(volume = 0.2) {
    clickAudio.volume = volume;
    clickAudio.currentTime = 0;
    clickAudio.play().catch(() => {});
  }

  function playTyping(volume = 0.05) {
    const audio = new Audio(typingSound);

    audio.volume = volume;

    audio.currentTime = 0;

    audio.play().catch(() => {});

   

    setTimeout(() => {
      audio.pause();
      audio.remove();
    }, 35);
  }

  return {
    playClick,
    playTyping,
  };
}
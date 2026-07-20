import clickSound from "../assets/sounds/click.mp3";

import typingSound from "../assets/sounds/typing.mp3";

console.log(clickSound);

const audioMap = {
  click: clickSound,
  typing: typingSound,
};

export function useSound() {
  function play(name: keyof typeof audioMap, volume = 0.2) {
    console.log("TOCANDO:", name);

    const audio = new Audio(audioMap[name]);

    audio.volume = volume;

    audio.addEventListener("canplay", () => {
      console.log("Áudio carregado");
    });

    audio.addEventListener("error", (e) => {
      console.log("ERRO:", e);
    });

    audio
      .play()
      .then(() => {
        console.log("PLAY OK");
      })
      .catch((err) => {
        console.error("Erro:", err);
      });
  }

  return { play };
}
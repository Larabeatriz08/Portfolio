import { useState } from "react";

type Screen = "boot" | "loading" | "desktop";

export function useBoot() {
  const [screen, setScreen] = useState<Screen>("boot");

  function enterWorkspace() {
    setScreen("loading");
  }

  function finishLoading() {
    setScreen("desktop");
  }

  return {
    screen,
    enterWorkspace,
    finishLoading,
  };
}
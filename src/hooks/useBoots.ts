import { useState } from "react";

export function useBoot() {
  const [booted, setBooted] = useState(false);

  const enterWorkspace = () => {
    setBooted(true);
  };

  return {
    booted,
    enterWorkspace,
  };
}
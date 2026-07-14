import { useState } from "react";
import type { AppId } from "../types/desktop";

export function useDesktop() {
  const [openedWindows, setOpenedWindows] = useState<AppId[]>([]);

  function openWindow(app: AppId) {
    setOpenedWindows((current) => {
      if (current.includes(app)) {
        return current;
      }

      return [...current, app];
    });
  }

  function closeWindow(app: AppId) {
    setOpenedWindows((current) =>
      current.filter((window) => window !== app)
    );
  }

  return {
    openedWindows,
    openWindow,
    closeWindow,
  };
}
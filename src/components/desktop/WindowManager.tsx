import { AnimatePresence } from "framer-motion";

import Window from "./Window";
import type { AppId } from "../../types/desktop";

type Props = {
  openedWindows: AppId[];
  closeWindow: (app: AppId) => void;
};

export default function WindowManager({
  openedWindows,
  closeWindow,
}: Props) {
  return (
    <AnimatePresence mode="popLayout">
      {openedWindows.map((app, index) => (
        <Window
          key={app}
          app={app}
          zIndex={openedWindows.length - index}
          onClose={() => closeWindow(app)}
        />
      ))}
    </AnimatePresence>
  );
}
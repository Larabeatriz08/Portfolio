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
    <>
      {openedWindows.map((app) => (
        <Window
          key={app}
          app={app}
          onClose={() => closeWindow(app)}
        />
      ))}
    </>
  );
}
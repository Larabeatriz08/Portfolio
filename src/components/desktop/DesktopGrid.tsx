import DesktopIcon from "./DesktopIcon";
import { desktopApps } from "./apps";

type Props = {
  onOpen: (app: string) => void;
};

export default function DesktopGrid({ onOpen }: Props) {
  return (
    <section
      className="
        relative
        z-10
        grid
        grid-cols-2
        gap-10
        md:grid-cols-3
      "
    >
      {desktopApps.map((app) => (
        <DesktopIcon
          key={app.id}
          title={app.title}
          subtitle={app.subtitle}
          onClick={() => onOpen(app.id)}
        />
      ))}
    </section>
  );
}
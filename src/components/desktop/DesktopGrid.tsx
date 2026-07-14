import DesktopIcon from "./DesktopIcon";
import { desktopApps } from "./apps";

export default function DesktopGrid() {
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
        />
      ))}
    </section>
  );
}
import type { AppId } from "../../types/desktop";
import WindowHeader from "./WindowHeader";

type Props = {
  app: AppId;
  onClose: () => void;
};

export default function Window({
  app,
  onClose,
}: Props) {
  return (
    <section
      className="
        absolute
        left-1/2
        top-1/2
        h-[600px]
        w-[900px]
        -translate-x-1/2
        -translate-y-1/2
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-950/90
        backdrop-blur-xl
        shadow-2xl
      "
    >
      <WindowHeader
        title={app}
        onClose={onClose}
      />

      <div className="p-8 text-white">
        Conteúdo da janela <strong>{app}</strong>
      </div>
    </section>
  );
}
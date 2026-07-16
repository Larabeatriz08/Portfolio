import { X } from "lucide-react";

import { desktopApps } from "../desktop/apps";

type Props = {
  app: string;
  onClose: () => void;
};

export default function AppWindow({
  app,
  onClose,
}: Props) {
  const currentApp = desktopApps.find(
    (item) => item.id === app
  );

  if (!currentApp) return null;

  const Component = currentApp.component;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/30
        backdrop-blur-sm
      "
    >
      <div
        className="
          flex
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-[#111113]
          shadow-[0_30px_80px_rgba(0,0,0,.65)]
        "
        style={{
          width: currentApp.width,
          height: currentApp.height,
        }}
      >
        {/* Header */}

        <header
          className="
            flex
            h-14
            items-center
            justify-between
            border-b
            border-white/10
            bg-[#18181B]
            px-5
          "
        >
          <div className="flex items-center gap-3">

            <div className="flex gap-2">

              <button
                onClick={onClose}
                className="h-3 w-3 rounded-full bg-red-500"
              />

              <button className="h-3 w-3 rounded-full bg-yellow-500" />

              <button className="h-3 w-3 rounded-full bg-green-500" />

            </div>

            <span className="text-sm font-medium text-zinc-300">
              {currentApp.title}
            </span>

          </div>

          <button
            onClick={onClose}
            className="text-zinc-500 transition hover:text-white"
          >
            <X size={16} />
          </button>
        </header>

        {/* Conteúdo */}

        <main className="flex-1 overflow-hidden">
          <Component />
        </main>
      </div>
    </div>
  );
}
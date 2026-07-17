import { motion } from "framer-motion";
import type { AppId } from "../../types/desktop";

import { desktopApps } from "../desktop/apps";
import WindowHeader from "./WindowHeader";

type Props = {
  app: AppId;
  zIndex: number;
  onClose: () => void;
};

export default function Window({
  app,
  zIndex,
  onClose,
}: Props) {
  const currentApp = desktopApps.find(
    (item) => item.id === app
  );

  if (!currentApp) return null;

  const Component = currentApp.component;

  return (
    <motion.section
      initial={{
        opacity: 0,
        scale: 0.88,
        y: 40,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        scale: 0.92,
        y: 20,
        filter: "blur(8px)",
      }}
      transition={{
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
      drag
      dragMomentum={false}
      dragElastic={0.08}
      whileTap={{
        cursor: "grabbing",
      }}
      style={{
        zIndex,
      }}
      className="
        absolute
        left-1/2
        top-1/2
        h-[650px]
        w-[1000px]
        max-w-[92vw]
        max-h-[90vh]
        -translate-x-1/2
        -translate-y-1/2
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-950/90
        backdrop-blur-xl
        shadow-[0_40px_120px_rgba(0,0,0,.55)]
      "
    >
      <WindowHeader
        title={currentApp.id}
        onClose={onClose}
      />

      <main
        className="
          h-[calc(100%-56px)]
          overflow-y-auto
          overflow-x-hidden
          bg-[#111113]
        "
      >
        <Component />
      </main>
    </motion.section>
  );
}
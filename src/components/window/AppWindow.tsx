import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useSound } from "../../hooks/useSounds";
import { desktopApps } from "../desktop/apps";
import type { AppId } from "../../types/desktop";

type Props = {
  app: AppId;
  zIndex: number; 
  onClose: () => void;
};

export default function AppWindow({
  app,
  zIndex,
  onClose,
}: Props) {
  const { play } = useSound();

  const currentApp = desktopApps.find(
    (item) => item.id === app
  );

  if (!currentApp) return null;

  const Component = currentApp.component;

return (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        backdrop-blur-sm
        p-6
      "
    >
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.08}
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
        className="
          flex
          h-[88vh]
          w-[92vw]
          max-h-[900px]
          max-w-[1400px]
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-[#111113]
          shadow-[0_40px_120px_rgba(0,0,0,.55)]
        "
      >
        

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
            cursor-grab
            active:cursor-grabbing
          "
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  play("close");
                  onClose();
                }}
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
            onClick={() => {
              play("close");
              onClose();
            }}
            className="text-zinc-500 transition hover:text-white"
          >
            <X size={16} />
          </button>
        </header>

      

        <main
          className="
            flex-1
            overflow-y-auto
            overflow-x-hidden
          "
        >
          <Component />
        </main>
      </motion.div>
    </motion.div>
  </AnimatePresence>
)};
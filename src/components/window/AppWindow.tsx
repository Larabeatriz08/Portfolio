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
          flex
          items-center
          justify-center
          backdrop-blur-sm
          pointer-events-none
        "
      >
        <motion.div
          drag
          dragListener={false}
          dragMomentum={false}
          dragElastic={0.08}
          style={{ zIndex }}
          initial={{
            opacity: 0,
            scale: 0.9,
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
            scale: 0.94,
            y: 25,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            pointer-events-auto
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
          <motion.header
            drag
            dragConstraints={{
              left: -2000,
              right: 2000,
              top: -2000,
              bottom: 2000,
            }}
            dragMomentum={false}
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
              select-none
            "
          >
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    play("close");
                    onClose();
                  }}
                  className="h-3 w-3 rounded-full bg-red-500 transition hover:scale-110"
                />

                <button
                  className="h-3 w-3 rounded-full bg-yellow-500 transition hover:scale-110"
                />

                <button
                  className="h-3 w-3 rounded-full bg-green-500 transition hover:scale-110"
                />
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
              className="
                rounded-lg
                p-1
                text-zinc-500
                transition
                hover:bg-white/5
                hover:text-white
              "
            >
              <X size={16} />
            </button>
          </motion.header>

          <main
            className="
              flex-1
              overflow-y-auto
              overflow-x-hidden
              bg-[#111113]
            "
          >
            <Component />
          </main>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
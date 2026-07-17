import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useSound } from "../../hooks/useSounds";
import { desktopApps } from "../desktop/apps";

type Props = {
  app: string;
  onClose: () => void;
};

export default function AppWindow({
  app,
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
    transition={{ duration: .20 }}
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
        

      </motion.div>
    </motion.div>
  </AnimatePresence>
)};
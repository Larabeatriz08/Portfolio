import { motion } from "framer-motion";
import { useSound } from "../../hooks/useSounds";

type DesktopIconProps = {
  id: string;
  title: string;
  subtitle: string;
  onOpen: (id: string) => void;
};

export default function DesktopIcon({
  id,
  title,
  subtitle,
  onOpen,
}: DesktopIconProps) {
  const { playClick } = useSound();

  return (
    <motion.button
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
      whileTap={{
        scale: 0.92,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => {
        playClick(0.15);

        setTimeout(() => {
          onOpen(id);
        }, 90);
      }}
      className="
        group
        flex
        w-36
        flex-col
        items-center
        gap-3
        rounded-3xl
        p-4
        transition-all
        duration-300
        hover:bg-white/5
      "
    >
      <motion.div
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-sm
          transition-all
          duration-300
          group-hover:border-pink-300/40
          group-hover:bg-pink-200/10
          group-hover:shadow-[0_0_25px_rgba(236,72,153,.25)]
        "
      >
        <motion.span
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-xl"
        >
          ✦
        </motion.span>
      </motion.div>

      <div className="text-center">
        <h3 className="font-medium text-white transition-colors group-hover:text-pink-300">
          {title}
        </h3>

        <p className="text-sm text-zinc-500 transition-colors group-hover:text-zinc-300">
          {subtitle}
        </p>
      </div>
    </motion.button>
  );
}
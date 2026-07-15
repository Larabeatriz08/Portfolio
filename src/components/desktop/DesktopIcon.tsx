type DesktopIconProps = {
  title: string;
  subtitle: string;
  onClick: () => void;
};

export default function DesktopIcon({
  title,
  subtitle,
  onClick,
}: DesktopIconProps) {
  return (
    <button
      onClick={onClick}
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
        hover:-translate-y-2
        hover:bg-white/5
      "
    >
      <div
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
          group-hover:border-pink-300/40
          group-hover:bg-pink-200/10
        "
      >
        ✦
      </div>

      <div className="text-center">
        <h3 className="font-medium text-white">{title}</h3>

        <p className="text-sm text-zinc-500">{subtitle}</p>
      </div>
    </button>
  );
}
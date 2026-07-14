import type { AppId } from "../../types/desktop";

type Props = {
  title: AppId;
  onClose: () => void;
};

export default function WindowHeader({
  title,
  onClose,
}: Props) {
  return (
    <header
      className="
        flex
        items-center
        justify-between
        border-b
        border-white/10
        px-5
        py-3
      "
    >
      <h2 className="capitalize font-semibold text-white">
        {title}
      </h2>

      <button
        onClick={onClose}
        className="
          h-8
          w-8
          rounded-full
          bg-red-500/80
          text-sm
          font-bold
          transition
          hover:bg-red-500
        "
      >
        ✕
      </button>
    </header>
  );
}
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export default function Button({
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        mt-10
        rounded-2xl
        border
        border-zinc-700
        bg-zinc-900
        px-8
        py-4
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-pink-300
        hover:shadow-[0_0_40px_rgba(248,180,217,.15)]
      "
    >
      {children}
    </button>
  );
}
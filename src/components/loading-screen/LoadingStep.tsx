type Props = {
  text: string;
  active: boolean;
  completed: boolean;
};

export default function LoadingStep({
  text,
  active,
  completed,
}: Props) {
  return (
    <div className="flex items-center gap-3 font-mono text-sm">
      <span
        className={`
          w-4
          ${completed ? "text-pink-300" : "text-zinc-600"}
        `}
      >
        {completed ? "✔" : active ? ">" : ""}
      </span>

      <span
        className={`
          transition-all
          duration-300

          ${
            completed
              ? "text-zinc-300"
              : active
              ? "text-white"
              : "text-zinc-600"
          }
        `}
      >
        {text}
      </span>
    </div>
  );
}
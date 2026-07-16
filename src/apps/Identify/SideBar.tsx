import { sections } from "./sections";
import type { IdentifySection } from "./types";

type Props = {
  current: IdentifySection;
  onChange: (section: IdentifySection) => void;
};

export default function Sidebar({
  current,
  onChange,
}: Props) {
  return (
    <aside
      className="
      w-64
      border-r
      border-white/10
      bg-[#18181B]
      p-5
    "
    >
      <h2 className="mb-8 text-lg font-bold text-white">
        Identify
      </h2>

      <div className="space-y-2">
        {sections.map((item) => {
          const Icon = item.icon;

          const active = current === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={`
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                transition-all
                duration-300

                ${
                  active
                    ? "bg-pink-500 text-white shadow-lg"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <Icon size={18} />

              {item.label}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
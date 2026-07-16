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
    <aside className="w-64 border-r border-white/10 bg-white/5 backdrop-blur-xl">

      <div className="p-6">

        <h2 className="text-lg font-semibold text-white">
          Identify
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          About the developer
        </p>

      </div>

      <nav className="space-y-2 px-4">

        {sections.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id as IdentifySection)}
              className={`
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                transition-all

                ${
                  current === item.id
                    ? "bg-pink-400/20 text-pink-300"
                    : "text-zinc-400 hover:bg-white/5"
                }
              `}
            >
              <Icon size={18} />

              {item.label}
            </button>
          );
        })}
      </nav>

    </aside>
  );
}
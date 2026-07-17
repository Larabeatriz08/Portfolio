import Logo from "../logo";
import Button from "../ui/Button";

type BootScreenProps = {
  onEnter: () => void;
};

export default function BootScreen({
  onEnter,
}: BootScreenProps) {
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#09090B]
      "
    >
      
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-[#09090B] to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,180,217,.12),transparent_55%)]" />

    
      <section
        className="
          relative
          z-10
          flex
          max-w-3xl
          flex-col
          items-center
          gap-6
          px-8
          text-center
        "
      >
        <Logo />

        <span className="text-xs uppercase tracking-[0.45em] text-zinc-500">
          LARA LIMA 
        </span>

        <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-white">
          Building thoughtful
          <br />
          digital experiences.
        </h1>

        <p className="max-w-xl text-lg leading-8 text-zinc-400">
          Software Engineer focused on creating products that combine design,
          performance and artificial intelligence.
        </p>

        <Button onClick={onEnter}>
          Enter Workspace →
        </Button>

        <span className="text-sm text-zinc-600">
          LARA OS • v1.0.0
        </span>
      </section>
    </main>
  );
}
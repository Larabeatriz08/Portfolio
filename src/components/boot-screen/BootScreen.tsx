import Logo from "../logo";
import Button from "../ui/Button";

export default function BootScreen() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090B] px-6">

      <section className="flex max-w-2xl flex-col items-center text-center">

        <Logo />

        <span className="mt-8 text-sm uppercase tracking-[0.4em] text-zinc-500">
          Lara Lima
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight text-white">
          Building thoughtful
          <br />
          digital experiences.
        </h1>

        <p className="mt-6 text-zinc-500">
          LARA OS • v1.0.0
        </p>

        <Button>
          Enter Workspace →
        </Button>

      </section>

    </main>
  );
}
export default function About() {
  return (
    <section className="space-y-8">

      <div>

        <span className="text-sm uppercase tracking-[0.3em] text-pink-300">
          About Me
        </span>

        <h1 className="mt-3 text-5xl font-bold text-white">
          Lara Lima
        </h1>

        <p className="mt-2 text-xl text-zinc-400">
          Software Engineering Student
        </p>

      </div>

      <p className="max-w-3xl text-lg leading-9 text-zinc-400">
        Passionate about creating modern digital products,
        full-stack applications, artificial intelligence
        and software architecture.
      </p>

      <div className="grid grid-cols-3 gap-6">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-500">
            Education
          </p>

          <h3 className="mt-2 text-xl text-white">
            FIAP
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-500">
            Focus
          </p>

          <h3 className="mt-2 text-xl text-white">
            Full Stack
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-500">
            Main Language
          </p>

          <h3 className="mt-2 text-xl text-white">
            TypeScript
          </h3>
        </div>

      </div>

    </section>
  );
}
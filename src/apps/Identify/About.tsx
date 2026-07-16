import FadeIn from "../../components/ui/FadeIn";
import AnimatedCard from "../../components/ui/AnimatedCard";
import Typewriter from "../../components/ui/Typewriter";

export default function About() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 pb-10">

      

      <FadeIn>
        <section className="flex flex-col items-center justify-between gap-10 lg:flex-row">

          <div className="flex-1">

            <span className="text-pink-400 font-medium">
              Welcome to LaraOS
            </span>

            <h1 className="mt-4 text-6xl font-black leading-tight text-white">
              <Typewriter
                text="Hello, I'm Lara Beatriz de Sousa Lima."
                speed={55}
              />
            </h1>

            <h2 className="mt-5 text-2xl text-zinc-300">
              Software Engineer in the Making
            </h2>

            <p className="mt-8 max-w-2xl leading-8 text-zinc-400">
              Building modern digital experiences with
              React, Python, Artificial Intelligence
              and thoughtful user interfaces.
            </p>

          </div>

          

          <div
            className="
              flex
              h-72
              w-72
              items-center
              justify-center
              rounded-full
              border
              border-pink-400/20
              bg-gradient-to-br
              from-zinc-800
              to-zinc-900
              shadow-[0_0_60px_rgba(236,72,153,.18)]
            "
          >
            <span className="text-zinc-500">
              <img src="./assets/images/imageProfile.jpeg" alt="Lara Beatriz de Sousa Lima" />
            </span>
          </div>

        </section>
      </FadeIn>

      

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <AnimatedCard delay={0}>
          <div className="p-6">
            <p className="text-zinc-500">Projects</p>

            <h2 className="mt-3 text-4xl font-bold text-white">
              8
            </h2>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={.1}>
          <div className="p-6">
            <p className="text-zinc-500">
              Technologies
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white">
              15+
            </h2>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={.2}>
          <div className="p-6">
            <p className="text-zinc-500">
              Current Focus
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              AI
            </h2>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={.3}>
          <div className="p-6">
            <p className="text-zinc-500">
              Location
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              São Paulo 🇧🇷
            </h2>
          </div>
        </AnimatedCard>

      </section>

    </div>
  );
}
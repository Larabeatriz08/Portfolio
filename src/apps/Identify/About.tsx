import FadeIn from "../../components/ui/FadeIn";
import AnimatedCard from "../../components/ui/AnimatedCard";
import Typewriter from "../../components/ui/Typewriter";
import imageProfile from "../../assets/images/imageProfile.jpeg";

export default function About() {
  return (
    <div className="mx-auto max-w-7xl space-y-14 pb-12">

      <FadeIn>
        <section className="flex flex-col-reverse items-center gap-16 lg:flex-row">

          {/* Texto */}

          <div className="flex-1 max-w-3xl">

            <span className="text-sm font-medium uppercase tracking-[.25em] text-pink-400">
              Welcome to LaraOS
            </span>

            <h1
              className="
                mt-5
                text-5xl
                font-black
                leading-[1.05]
                tracking-tight
                text-white
                md:text-6xl
                xl:text-7xl
              "
            >
              <Typewriter
                text="Hello, I'm Lara Beatriz de Sousa Lima."
                speed={55}
              />
            </h1>

            <h2 className="mt-6 text-2xl text-zinc-300">
              Software Engineer in the Making
            </h2>

            <div className="mt-6 flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

              <span className="text-sm text-green-300">
                Available for Software Engineering Internships
              </span>

            </div>

            <p className="mt-10 max-w-2xl text-lg leading-9 text-zinc-400">

              I'm an 18-year-old Software Engineering student at
              <span className="text-white"> FIAP </span>
              and an IT Technician graduated from
              <span className="text-white"> UNASP </span>.

              <br />
              <br />

              Passionate about creating modern web applications,
              intuitive user experiences and AI-powered solutions.

              <br />
              <br />

              Currently focused on Full Stack Development using
              React, TypeScript, Python, FastAPI and Artificial
              Intelligence.

            </p>

          </div>

          {/* Foto */}

          <div className="flex flex-1 justify-center">

            <div className="relative h-72 w-72 lg:h-80 lg:w-80">

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-pink-500/20
                  blur-[90px]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-full
                  border
                  border-pink-400/20
                  bg-zinc-900
                  shadow-[0_0_80px_rgba(236,72,153,.18)]
                "
              >
                <img
                  src={imageProfile}
                  alt="Lara Lima"
                  className="h-full w-full object-cover"
                />
              </div>

              <div
                className="
                  absolute
                  bottom-5
                  right-5
                  h-5
                  w-5
                  rounded-full
                  border-4
                  border-zinc-900
                  bg-green-400
                "
              />

            </div>

          </div>

        </section>

      </FadeIn>

      {/* Cards */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <AnimatedCard delay={0}>
          <div className="p-7">

            <p className="text-zinc-500">
              Projects
            </p>

            <h2 className="mt-4 text-5xl font-black text-white">
              8
            </h2>

          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.1}>
          <div className="p-7">

            <p className="text-zinc-500">
              Technologies
            </p>

            <h2 className="mt-4 text-5xl font-black text-white">
              15+
            </h2>

          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
          <div className="p-7">

            <p className="text-zinc-500">
              Current Focus
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white">
              AI &
              <br />
              Full Stack
            </h2>

          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.3}>
          <div className="p-7">

            <p className="text-zinc-500">
              Location
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white">
              São Paulo
              <br />
              Brazil 🇧🇷
            </h2>

          </div>
        </AnimatedCard>

      </section>

    </div>
  );
}
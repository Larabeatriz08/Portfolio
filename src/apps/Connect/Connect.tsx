import FadeIn from "../../components/ui/FadeIn";
import AnimatedCard from "../../components/ui/AnimatedCard";

import {
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { contactData } from "./ContactData";

export default function Connect() {
  return (
    <div className="mx-auto max-w-7xl space-y-14 pb-12">

      <FadeIn>

        <section className="text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-pink-500/10 shadow-[0_0_60px_rgba(236,72,153,.25)]">

            <Sparkles
              size={34}
              className="text-pink-400"
            />

          </div>

          <h1 className="mt-8 text-6xl font-black text-white">
            Let's Connect
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-zinc-400">
            I'm always open to internship opportunities,
            collaborations and innovative projects.
            If you have an idea, a challenge or simply want to
            connect, I'd love to hear from you.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">

            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

            <span className="text-sm text-green-300">
              Available for Software Engineering Internships
            </span>

          </div>

        </section>

      </FadeIn>

      {/* Contact Cards */}

      <section className="grid gap-6 md:grid-cols-2">

        {contactData.map((contact, index) => {

          const Icon = contact.icon;

          return (

            <AnimatedCard
              key={contact.title}
              delay={index * 0.08}
            >

              <button
                onClick={() => {
                  if (contact.href) {
                    window.open(contact.href, "_blank");
                  }
                }}
                className="
                  group
                  w-full
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#18181B]
                  p-8
                  text-left
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-pink-400/40
                  hover:shadow-[0_0_40px_rgba(236,72,153,.18)]
                "
              >

                <div className="flex items-start justify-between">

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-pink-500/10
                      transition
                      group-hover:bg-pink-500/20
                    "
                  >

                    <Icon
                      size={30}
                      className="text-pink-400"
                    />

                  </div>

                  {contact.href && (

                    <ArrowRight
                      size={22}
                      className="
                        text-zinc-600
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-pink-400
                      "
                    />

                  )}

                </div>

                <h2 className="mt-8 text-2xl font-bold text-white">
                  {contact.title}
                </h2>

                <p className="mt-3 text-zinc-400 break-all">
                  {contact.value}
                </p>

              </button>

            </AnimatedCard>

          );

        })}

      </section>

      {/* CTA */}

      <FadeIn>

        <section
          className="
            rounded-3xl
            border
            border-pink-500/20
            bg-gradient-to-r
            from-pink-500/10
            to-transparent
            p-10
            text-center
          "
        >

          <Mail
            size={42}
            className="mx-auto text-pink-400"
          />

          <h2 className="mt-6 text-4xl font-black text-white">
            Let's Build Something Amazing.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400 leading-8">
            Whether it's an internship opportunity,
            freelance project or simply a conversation
            about technology, feel free to reach out.
          </p>

          <button
            onClick={() =>
              window.location.href =
                "mailto:laradesouzalima08@gmail.com"
            }
            className="
              mt-8
              rounded-2xl
              bg-pink-500
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-pink-400
              hover:shadow-[0_0_35px_rgba(236,72,153,.4)]
            "
          >
            Send me an Email
          </button>

        </section>

      </FadeIn>

      {/* Footer */}

      <p className="text-center text-sm tracking-[.3em] uppercase text-zinc-600">
        Always Learning • Always Building • Always Creating
      </p>

    </div>
  );
}
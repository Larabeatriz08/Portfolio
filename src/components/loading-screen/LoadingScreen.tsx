import { useEffect, useState } from "react";

import LoadingStep from "./LoadingStep";
import { loadingSteps } from "./LoadingData";

type Props = {
  onFinish: () => void;
};

export default function LoadingScreen({
  onFinish,
}: Props) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep >= loadingSteps.length) {
      const timer = setTimeout(() => {
        onFinish();
      }, 800);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 700);

    return () => clearTimeout(timer);
  }, [currentStep, onFinish]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090B]">
      <section className="w-full max-w-xl space-y-8">

        <div>
          <h1 className="font-mono text-4xl font-bold text-white">
            LaraOS
          </h1>

          <p className="mt-2 font-mono text-zinc-500">
            Software Engineer Portfolio
          </p>
        </div>

        <div className="space-y-3">

          {loadingSteps.map((step, index) => (
            <LoadingStep
              key={step.id}
              text={step.text}
              completed={index < currentStep}
              active={index === currentStep}
            />
          ))}

        </div>

      </section>
    </main>
  );
}
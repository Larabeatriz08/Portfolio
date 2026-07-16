import { useState } from "react";

import Sidebar from "./Sidebar";
import About from "./About";
import Resume from "./Resume";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

import type { IdentifySection } from "./types";

export default function Identify() {
  const [section, setSection] =
    useState<IdentifySection>("about");

  function renderContent() {
    switch (section) {
      case "resume":
        return <Resume />;

      case "experience":
        return <Experience />;

      case "education":
        return <Education />;

      case "skills":
        return <Skills />;

      default:
        return <About />;
    }
  }

  return (
    <div className="flex h-full bg-[#111113]">
      <Sidebar
        current={section}
        onChange={setSection}
      />

      <main className="flex-1 overflow-y-auto p-10">
        {renderContent()}
      </main>
    </div>
  );
}
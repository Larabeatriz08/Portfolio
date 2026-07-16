import type { DesktopApp } from "../../types/desktop";

import Identify from "../../apps/Identify";
import Workspace from "../../apps/Workspace";
import Research from "../../apps/Research";
import Toolkit from "../../apps/Toolkit";
import Connect from "../../apps/Connect";

export const desktopApps: DesktopApp[] = [
  {
    id: "identify",
    title: "Identity",
    subtitle: "About me",
    width: 900,
    height: 650,
    component: Identify,
  },
  {
    id: "workspace",
    title: "Workspace",
    subtitle: "Projects",
    width: 1000,
    height: 700,
    component: Workspace,
  },
  {
    id: "research",
    title: "Research",
    subtitle: "Experiments",
    width: 900,
    height: 650,
    component: Research,
  },
  {
    id: "toolkit",
    title: "Tech Stack",
    subtitle: "Skills",
    width: 900,
    height: 650,
    component: Toolkit,
  },
  {
    id: "connect",
    title: "Contact",
    subtitle: "Let's talk",
    width: 700,
    height: 500,
    component: Connect,
  },
];
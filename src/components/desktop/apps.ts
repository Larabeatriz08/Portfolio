import type { DesktopApp } from "../../types/desktop";

import Identity from "../../apps/Identity";
import Workspace from "../../Workspace";
import Lab from "../../Lab";
import Stack from "../../Stack";
import Contact from "../../Contact";

export const desktopApps: DesktopApp[] = [
  {
    id: "identity",
    title: "Identity",
    subtitle: "About me",
    width: 900,
    height: 650,
    component: Identity,
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
    id: "lab",
    title: "Lab",
    subtitle: "Experiments",
    width: 900,
    height: 650,
    component: Lab,
  },
  {
    id: "stack",
    title: "Tech Stack",
    subtitle: "Skills",
    width: 900,
    height: 650,
    component: Stack,
  },
  {
    id: "contact",
    title: "Contact",
    subtitle: "Let's talk",
    width: 700,
    height: 500,
    component: Contact,
  },
];
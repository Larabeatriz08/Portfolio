import type { LucideIcon } from "lucide-react";
import {
  User,
  FileText,
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";

import type { IdentifySection } from "./types";

export interface SectionItem {
  id: IdentifySection;
  label: string;
  icon: LucideIcon;
}

export const sections: SectionItem[] = [
  {
    id: "about",
    label: "About",
    icon: User,
  },
  {
    id: "resume",
    label: "Resume",
    icon: FileText,
  },
  {
    id: "experience",
    label: "Career",
    icon: Briefcase,
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
  },
  {
    id: "skills",
    label: "Skills",
    icon: Code2,
  },
];
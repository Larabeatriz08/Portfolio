import type { ComponentType } from "react";

export type AppId =
  | "identity"
  | "workspace"
  | "lab"
  | "stack"
  | "contact";

export interface DesktopApp {
  id: AppId;
  title: string;
  subtitle: string;

  width: number;
  height: number;

  component: ComponentType;
}
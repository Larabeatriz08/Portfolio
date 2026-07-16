import type { ComponentType } from "react";

export type AppId =
  | "identify"
  | "workspace"
  | "research"
  | "toolkit"
  | "connect";

export interface DesktopApp {
  id: AppId;
  title: string;
  subtitle: string;
  width: number;
  height: number;
  component: ComponentType;
}
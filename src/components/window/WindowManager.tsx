import AppWindow from "./AppWindow";

type WindowManagerProps = {
  app: string | null;
  onClose: () => void;
};

export default function WindowManager({
  app,
  onClose,
}: WindowManagerProps) {
  if (!app) return null;

  return (
    <AppWindow
      app={app}
      onClose={onClose}
    />
  );
}
import BootScreen from "../components/boot-screen";
import Desktop from "../desktop";
import { useBoot } from "../hooks/useBoots";

export default function RootLayout() {
  const { booted, enterWorkspace } = useBoot();

  if (!booted) {
    return <BootScreen onEnter={enterWorkspace} />;
  }

  return <Desktop />;
}
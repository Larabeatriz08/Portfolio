import BootScreen from "../components/boot-screen/BootScreen";
import Desktop from "../components/desktop";
import LoadingScreen from "../components/loading-screen";

import { useBoot } from "../hooks/useBoots";

export default function RootLayout() {
  const {
    screen,
    enterWorkspace,
    finishLoading,
  } = useBoot();

  if (screen === "boot") {
    return <BootScreen onEnter={enterWorkspace} />;
  }

  if (screen === "loading") {
    return (
      <LoadingScreen
        onFinish={finishLoading}
      />
    );
  }

  return <Desktop />;
}
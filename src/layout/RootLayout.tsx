import BootScreen from "../components/boot-screen";
import { useBoot } from "../hooks/useBoots";

export default function RootLayout() {
  const { booted, enterWorkspace } = useBoot();

  if (!booted) {
    return <BootScreen onEnter={enterWorkspace} />;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090B] text-white">
      <h1 className="text-5xl font-bold">
        Desktop em construção...
      </h1>
    </main>
  );
}
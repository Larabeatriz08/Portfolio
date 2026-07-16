type Props = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
};

export default function AppLayout({
  sidebar,
  children,
}: Props) {
  return (
    <div className="flex h-full overflow-hidden">


      <aside
        className="
          w-72
          border-r
          border-white/10
          bg-[#151518]
          backdrop-blur-xl
        "
      >
        {sidebar}
      </aside>

   

      <main
        className="
          flex-1
          overflow-y-auto
          bg-[#111113]
          p-10
        "
      >
        {children}
      </main>

    </div>
  );
}
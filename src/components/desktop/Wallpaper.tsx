export default function Wallpaper() {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        bg-[#09090B]
      "
    >
      
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-[#09090B] to-black" />

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-200/10 blur-[180px]" />

    
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-white/5 blur-[150px]" />
    </div>
  );
}
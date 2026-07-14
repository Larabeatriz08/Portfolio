type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="
      mt-10
      rounded-2xl
      border
      border-zinc-700
      bg-zinc-900
      px-7
      py-4
      text-white
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-pink-300
      hover:shadow-lg
      "
    >
      {children}
    </button>
  );
}
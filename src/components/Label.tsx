export function Label({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-full bg-brand px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-white uppercase">
      {children}
    </span>
  );
}

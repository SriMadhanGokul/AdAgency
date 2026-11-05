type LogoProps = {
  className?: string;
};

export function Logo({ className = "h-16" }: LogoProps) {
  return (
    <img
      src="/logo-mark.png"
      alt="AdyPlus Agency"
      className={`w-auto object-contain ${className}`}
    />
  );
}

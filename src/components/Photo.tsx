import { useState } from "react";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function Photo({ src, alt, className = "", priority = false }: PhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`grid place-items-center bg-[radial-gradient(circle_at_30%_20%,#3a2478,#12101c)] ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="font-display text-sm tracking-[0.22em] text-white/50">ADYPLUS</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setFailed(true)}
    />
  );
}

export function StarSticker({
  color,
  className,
}: {
  color: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50 4 L61 34 L92 32 L67 52 L78 82 L50 63 L22 82 L33 52 L8 32 L39 34 Z"
        fill={color}
        stroke="var(--color-bg-primary)"
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

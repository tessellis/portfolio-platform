export function FlowerSticker({
  color,
  className,
}: {
  color: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g
        fill={color}
        stroke="var(--color-bg-primary)"
        strokeWidth="6"
        strokeLinejoin="round"
      >
        <circle cx="50" cy="28" r="16" />
        <circle cx="72" cy="50" r="16" />
        <circle cx="50" cy="72" r="16" />
        <circle cx="28" cy="50" r="16" />
      </g>
      <circle cx="50" cy="50" r="12" fill="var(--color-bg-primary)" />
    </svg>
  );
}

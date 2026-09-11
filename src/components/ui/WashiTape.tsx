export function WashiTape({
  color,
  className,
}: {
  color: string;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: color,
        opacity: 0.7,
      }}
      aria-hidden="true"
    />
  );
}

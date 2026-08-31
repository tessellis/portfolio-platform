export function SparkleMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2C12.8 7 15 9.5 21.5 11.8C15.3 12.6 12.8 15 12.2 22C11.3 15.2 9 12.8 2.3 12.2C8.7 11 11 8.5 12 2Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
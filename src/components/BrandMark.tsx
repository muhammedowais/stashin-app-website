type BrandMarkProps = {
  size?: number;
  className?: string;
  title?: string;
};

export function BrandMark({ size = 36, className, title = "Stashin" }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label={title}
      className={className}
    >
      <rect width="48" height="48" rx="10" fill="#1E1B18" />
      <path
        fill="#FAF6F0"
        d="M16 11h16c1.2 0 2 1 2 2.2V37l-10-6-10 6V13.2c0-1.2.8-2.2 2-2.2z"
      />
    </svg>
  );
}

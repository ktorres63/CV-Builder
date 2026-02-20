type IconProps = {
  className?: string;
};

export default function ArrowUpIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 -960 960 960"
      fill="currentColor"
      height="24px"
      width="24px"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
    </svg>
  );
}

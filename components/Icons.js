export function Star({ color, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width}
      height={height}
      baseProfile="basic"
    >
      <path
        fill={color}
        d="M45.023,18.995H28.991L24.039,3.737l-4.968,15.259L3.039,18.98l12.984,9.44l-4.968,15.243 l12.984-9.424l12.968,9.424L32.055,28.42L45.023,18.995z"
      />
      <path
        fill="#005128"
        d="M33.169,31.871l-1.114-3.451l-8.016,5.819L33.169,31.871z"
      />
    </svg>
  );
}

const paths = {
  pakaian: (
    <path d="M9 4 L4 8 L7 12 L9 10.5 V27 H23 V10.5 L25 12 L28 8 L23 4 Q16 8 9 4 Z" />
  ),
  bahasa: (
    <>
      <path d="M5 6 H19 V18 H10 L6 22 V18 H5 Z" />
      <path d="M15 12 H27 V22 H20 L18 26 V22 H15 Z" />
    </>
  ),
  rumah: (
    <path d="M4 16 L16 6 L28 16 M8 14 V27 H24 V14 M13 27 V19 H19 V27" />
  ),
  lukisan: (
    <>
      <rect x="5" y="5" width="22" height="18" rx="1.5" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M5 20 L12 14 L17 18 L22 12 L27 17" />
    </>
  ),
  musik: (
    <path d="M12 22 a3.5 3.5 0 1 1 0 -0.1 M22 19 a3.5 3.5 0 1 1 0 -0.1 M12 22 V8 L22 6 V19" />
  ),
}

export default function CategoryIcon({ name, size = 26 }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.lukisan}
    </svg>
  )
}

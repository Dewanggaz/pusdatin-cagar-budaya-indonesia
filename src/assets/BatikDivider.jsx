// Elemen signature: motif parang bergaya batik sebagai pembatas visual antar bagian.
export default function BatikDivider({ color = 'var(--color-gold)', flip = false }) {
  return (
    <svg
      className={`batik-divider ${flip ? 'is-flip' : ''}`}
      viewBox="0 0 240 16"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ width: '100%', height: '16px', display: 'block' }}
    >
      <path
        d="M0 14 Q10 2 20 14 T40 14 T60 14 T80 14 T100 14 T120 14 T140 14 T160 14 T180 14 T200 14 T220 14 T240 14"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

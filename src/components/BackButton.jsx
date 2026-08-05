import { useNavigate } from 'react-router-dom'

export default function BackButton({ fallback = '/', label = 'Kembali' }) {
  const navigate = useNavigate()

  function handleClick() {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1)
    } else {
      navigate(fallback)
    }
  }

  return (
    <button className="back-button" onClick={handleClick} type="button">
      <svg viewBox="0 0 20 20" width="15" height="15" fill="none" aria-hidden="true">
        <path
          d="M12.5 4.5 6 10l6.5 5.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </button>
  )
}

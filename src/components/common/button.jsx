'use client'

export default function Button({ children, variant = 'primary', ...props }) {
  return (
    <button
      className={`rounded-md px-5 py-3 text-white font-semibold shadow-md transition ${
        variant === 'primary' ? 'bg-white text-[#2AD882]' : ''
      }`}
      {...props}
    >
      {children}
    </button>
  )
}

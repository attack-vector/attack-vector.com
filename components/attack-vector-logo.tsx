export function AttackVectorLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          <path d="M16 2L4 10V22L16 30L28 22V10L16 2Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M16 8L10 12V20L16 24L22 20V12L16 8Z" fill="currentColor" opacity="0.5" />
          <circle cx="16" cy="16" r="3" fill="currentColor" />
        </svg>
      </div>
      <span className="font-mono text-xl font-bold tracking-wider">
        ATTACK<span className="text-primary">-</span>VECTOR
      </span>
    </div>
  )
}

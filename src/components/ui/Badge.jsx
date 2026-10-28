export default function Badge({
  children,
  variant = 'sand',
  size = 'md',
  className = '',
  icon: Icon,
}) {
  const baseStyles = 'inline-flex items-center font-medium leading-none'

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1 rounded-md gap-1.5',
    md: 'text-xs px-3 py-1.5 rounded-md gap-2',
    lg: 'text-sm px-3.5 py-2 rounded-lg gap-2 font-semibold',
  }

  const variantStyles = {
    sand: 'bg-[#E8D2B5] text-[#590907]',
    sandSubtle: 'bg-[#E8D2B5]/50 text-[#590907]',
    burgundy: 'bg-[#590907] text-[#E8D2B5]',
    sage: 'bg-[#A5A798]/25 text-[#2C2E27]',
    dark: 'bg-[#1E0302] text-[#E8D2B5]',
    success: 'bg-emerald-100 text-emerald-900',
    warning: 'bg-amber-100 text-amber-950',
  }

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.sand} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  )
}

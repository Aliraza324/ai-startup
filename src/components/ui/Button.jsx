export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-[background-color,color,transform,opacity] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer'

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5 font-semibold',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2 font-medium',
    lg: 'text-base px-6 py-3.5 rounded-lg gap-2.5 font-semibold',
    xl: 'text-lg px-8 py-4 rounded-xl gap-3 font-semibold',
  }

  const variantStyles = {
    primary:
      'bg-[#590907] text-[#E8D2B5] hover:bg-[#74110E] focus-visible:ring-[#590907]',
    secondary:
      'bg-[#E8D2B5] text-[#590907] hover:bg-[#DFC3A0] focus-visible:ring-[#590907]',
    outline:
      'bg-transparent text-[#590907] border-2 border-[#590907] hover:bg-[#E8D2B5]/30 focus-visible:ring-[#590907]',
    sage:
      'bg-[#A5A798]/20 text-[#2C2E27] hover:bg-[#A5A798]/35 focus-visible:ring-[#A5A798]',
    darkPrimary:
      'bg-[#E8D2B5] text-[#590907] hover:bg-white font-semibold focus-visible:ring-[#E8D2B5]',
    darkOutline:
      'bg-transparent text-[#E8D2B5] border-2 border-[#E8D2B5]/60 hover:border-[#E8D2B5] hover:bg-[#E8D2B5]/10 focus-visible:ring-[#E8D2B5]',
    ghost:
      'bg-transparent text-[#590907] hover:bg-[#E8D2B5]/30 focus-visible:ring-[#590907]',
  }

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  )
}

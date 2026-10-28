import Badge from './Badge'

export default function SectionHeading({
  badgeText,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
  titleClassName = '',
}) {
  const isCenter = align === 'center'

  return (
    <div
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {badgeText && (
        <div className="mb-4">
          <Badge
            variant={dark ? 'dark' : 'sand'}
            size="md"
          >
            {badgeText}
          </Badge>
        </div>
      )}

      {title && (
        <h2
          className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12] ${
            dark ? 'text-white' : 'text-[#590907]'
          } ${titleClassName}`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-normal ${
            dark ? 'text-[#E8D2B5]' : 'text-[#57534E]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default function Container({
  children,
  className = "",
  id,
  as = "div",
  size = "default",
}) {
  const sizeClasses = {
    default: "max-w-6xl",
    sm: "max-w-3xl",
    lg: "max-w-7xl",
    xl: "max-w-8xl",
  };

  const Tag = as;

  return (
    <Tag
      id={id}
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} bg-inherit transition-colors duration-300 ${className}`}
    >
      {children}
    </Tag>
  );
}

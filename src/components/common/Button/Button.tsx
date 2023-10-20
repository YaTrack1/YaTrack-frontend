export const Button = ({
  variant,
  color,
  size,
  type,
  width,
  children,
  onClick,
  disabled = false,
}) => (
  <button
    className='button'
    type={type}
    onClick={onClick}
    style={{ width }}
    disabled={disabled}
  >
    {children}
  </button>
);

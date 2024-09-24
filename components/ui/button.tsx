type ButtonProps = {
  variant?: string;
  size?: string;
  className?: string;
};

const Button: React.FC<ButtonProps & { children: React.ReactNode }> = ({
  variant,
  size,
  className,
  children,
}) => {
  return (
    <>
      <div className={`button ${variant} ${size} ${className}`}>{children}</div>
    </>
  );
};

export { Button };

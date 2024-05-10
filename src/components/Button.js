function Button({ children, className, onClick, ...rest }) {
  return (
    <button
      className={`border rounded-md border-purple m-8 px-3 ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;

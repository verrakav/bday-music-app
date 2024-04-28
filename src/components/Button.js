function Button({ children, className, onClick, ...rest }) {
  return (
    <button
      className="border rounded-md border-purple mt-8 px-3"
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;

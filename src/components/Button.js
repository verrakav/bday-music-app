function Button({ children, className, ...rest }) {
  return (
    <button className="border rounded-md border-purple mt-8 px-3">
      {children}
    </button>
  );
}

export default Button;

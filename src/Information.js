function Information({ children, handlersPull: { onHover, onClick } }) {
  return (
    <div
      style={{ backgroundColor: "teal" }}
      onMouseOver={onHover}
      onClick={onClick}
    >
      <h1>Information</h1>
      {children}
    </div>
  );
}

export default Information;

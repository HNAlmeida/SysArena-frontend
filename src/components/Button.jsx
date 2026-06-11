function Button(props) {
  return (
    <button className="btn btn-outline btn-soft" {...props}>
      {props.children}
    </button>
  );
}

export default Button;

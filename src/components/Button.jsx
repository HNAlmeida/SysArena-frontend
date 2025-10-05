function Button(props) {
  return (
    <button className="btn btn-soft btn-outline" {...props}>
      {props.children}
    </button>
  );
}

export default Button;

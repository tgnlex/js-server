

function Button(props) {
  return (
    <button style={props.style} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export {Button};

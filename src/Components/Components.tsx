function Button(props: {
  children: string;
  id?: string;
  onClick?: () => void;
}) {
  return (
    <button id={props.id} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
function InputField(props: { id: string }) {
  return <input type="date" placeholder="Enter text here" id={props.id} />;
}

export { Button, InputField };

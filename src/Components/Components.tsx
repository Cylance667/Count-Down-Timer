function Button(props: {
	children: string;
	className?: string;
	onClick?: () => void;
}) {
	return (
		<button className={props.className} onClick={props.onClick}>
			{props.children}
		</button>
	);
}
function InputField(props: { className: string }) {
	return (
		<input
			type="date"
			placeholder="Enter text here"
			className={props.className}
		/>
	);
}

export { Button, InputField };

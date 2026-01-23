import { useNavigate } from "react-router-dom";
import { Button, InputField } from "../Components/Components.tsx";
import { ClickDebug } from "../Components/Functions.ts";

export default function InputPage() {
	const navigate = useNavigate();

	const ClickNavigation = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		navigate("/countdown");
		ClickDebug();
	};

	return (
		<div className="page">
			<div className="div">
				<h1 className="text">Birthday Count Down Timer</h1>
				<p className="text">Enter your birthday below</p>
				<form onSubmit={ClickNavigation}>
					<InputField className="date-input" />
					<Button className="EnterButton">Enter</Button>
				</form>
			</div>
		</div>
	);
}

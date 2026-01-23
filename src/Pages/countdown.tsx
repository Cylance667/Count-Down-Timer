import { GetTimeLeft } from "../Components/Functions.ts";

export default function CountdownPage() {
	return (
		<div className="page">
			<div className="days-div">
				<h1 className="text">Time Left</h1>
				<h2 className="text" id="countdown-timer">
					Days: {GetTimeLeft().days}, Hours: {GetTimeLeft().hours}, Minutes:{" "}
					{GetTimeLeft().minutes}, Seconds: {GetTimeLeft().seconds}
				</h2>
			</div>
		</div>
	);
}

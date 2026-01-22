function ClickDebug() {
	console.log("Date: " + GetDate());
	console.log("Days left: " + GetTimeLeft());
}
function GetDate() {
	const InputField = document.querySelector<HTMLInputElement>("#date-input");
	let inputValue = InputField ? (InputField as HTMLInputElement).value : "";
	console.log("Input Value: " + inputValue);

	if (inputValue) {
		console.log("Storing birthday: " + inputValue);
		if (localStorage.getItem("birthday") == null) {
			localStorage.setItem("birthday", inputValue);
		} else {
			inputValue = localStorage.getItem("birthday") || "";
		}
		return inputValue;
	}
}

function GetTimeLeft() {
	const dateString = localStorage.getItem("birthday");
	if (!dateString) return 0;

	const [, month, day] = dateString.split("-").map(Number);
	const currentDate = new Date();
	const targetDate = new Date(currentDate.getFullYear(), month - 1, day + 1);

	const timeDifference = targetDate.getTime() - currentDate.getTime();

	const daysLeft = Math.max(
		Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
		0,
	);
	return Math.max(daysLeft, 0);
}

export { GetDate, GetTimeLeft, ClickDebug };

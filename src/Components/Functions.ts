import { useState, useEffect } from "react";

function ClickDebug() {
	console.log("Date: " + GetDate());
	console.log("Days left: " + GetTimeLeft());
}
function GetDate() {
	const InputField = document.querySelector<HTMLInputElement>("#date-input");
	let inputValue = InputField ? (InputField as HTMLInputElement).value : "";
	console.log("Input Value: " + inputValue);

	InputField?.addEventListener("change", () => {
		localStorage.setItem("birthday", InputField.value);
	});

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

type TimeLeft = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

function GetTimeLeft(): TimeLeft {
	const dateString = localStorage.getItem("birthday");
	if (!dateString)
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};

	const [, month, day] = dateString.split("-").map(Number);
	const targetDate = new Date(
		new Date().getFullYear(),
		month - 1,
		day + 1,
		0,
		0,
		0,
		0,
	);

	const timeDifference = targetDate.getTime() - Date.now();

	if (timeDifference <= 0) {
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};
	}
	const totalSeconds = Math.floor(timeDifference / 1000);

	return {
		days: Math.floor(totalSeconds / (60 * 60 * 24)),
		hours: Math.floor((totalSeconds / (60 * 60)) % 24),
		minutes: Math.floor((totalSeconds / 60) % 60),
		seconds: totalSeconds % 60,
	};
}

function UpdateCountdown() {
  const [, setTimeLeft] = useState<TimeLeft>(GetTimeLeft());

  // Update countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(GetTimeLeft());
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
};

export { GetDate, GetTimeLeft, ClickDebug, UpdateCountdown };

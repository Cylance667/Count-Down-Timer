import { GetTimeLeft } from "../Components/Functions.tsx";

export default function Countdown() {
  return (
    <div id="page">
      <div id="days-div">
        <h1 id="text">Day's Left: {GetTimeLeft()}</h1>
      </div>
    </div>
  );
}

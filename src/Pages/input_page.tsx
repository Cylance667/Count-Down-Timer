import { useNavigate } from "react-router-dom";
import { Button, InputField } from "../Components/Components.tsx";
import { ClickDebug } from "../Components/Functions.tsx";

export default function InputPage() {
  const navigate = useNavigate();

  const ClickNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/countdown");
    ClickDebug();
  };

  return (
    <div id="page">
      <div id="div">
        <h1 id="text">Birthday Count Down Timer</h1>
        <p id="text">Enter your birthday below</p>
        <form onSubmit={ClickNavigation}>
          <InputField id="date-input" />
          <Button id="EnterButton">Enter</Button>
        </form>
      </div>
    </div>
  );
}

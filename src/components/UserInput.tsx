import { useState } from "react";

interface Event {
  target: {
    value: string;
  };
}

export default function UserInput() {
  const [currentSpend, setCurrentSpeed] = useState("");

  function handleInput(e: Event) {
    setCurrentSpeed(e.target.value);
  }

  function handleSubmit() {}

  return (
    <div>
      <input
        type="text"
        value={currentSpend}
        placeholder="Spend for Reason"
        onChange={handleInput}
      />
      <input type="button" value=">" />
    </div>
  );
}

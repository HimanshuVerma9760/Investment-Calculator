import Header from "./Components/Header";
import Results from "./Components/Results";
import UserInput from "./Components/UserInput";
import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const isValidInput = inputs.duration > 0 ? true : false;
  function handleChange(fieldId, newValue) {
    setInputs((prevValues) => {
      return {
        ...prevValues,
        [fieldId]: +newValue, // this + sign will force the system to treat it as a number and not a string
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput inputs={inputs} onChange={handleChange} />
      {isValidInput ? (
        <Results inputs={inputs} />
      ) : (
        <p className="center">Invalid Input (duration must be atleast 1)</p>
      )}
    </>
  );
}

export default App;

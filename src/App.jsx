import Header from "./Components/Header";
import Results from "./Components/Results";
import UserInput from "./Components/UserInput";
import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 15000,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(fieldId, newValue) {
    setInputs((prevValues) => {
      return {
        ...prevValues,
        [fieldId]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput inputs={inputs} onChange={handleChange} />
      <Results inputs={inputs}/>
    </>
  );
}

export default App;

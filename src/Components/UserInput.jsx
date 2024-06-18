import { useState } from "react";

export default function UserInput() {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 15000,
    interest: 6,
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
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              value={inputs.initialInvestment}
              onChange={(event) =>
                handleChange("initialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              value={inputs.annualInvestment}
              onChange={(event) =>
                handleChange("annualInvestment", event.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Interest</label>
            <input
              type="number"
              required
              value={inputs.interest}
              onChange={(event) => handleChange("interest", event.target.value)}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              value={inputs.duration}
              onChange={(event) => handleChange("duration", event.target.value)}
            />
          </p>
        </div>
      </section>
    </>
  );
}

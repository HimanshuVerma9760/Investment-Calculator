export default function UserInput({ onChange, inputs }) {
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
                onChange("initialInvestment", event.target.value)
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
                onChange("annualInvestment", event.target.value)
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
              onChange={(event) => onChange("interest", event.target.value)}
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

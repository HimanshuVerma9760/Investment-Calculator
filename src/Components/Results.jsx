import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Results({ inputs }) {
  const resultData = calculateInvestmentResults(inputs);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>year</th>
            <th>Investment Value</th>
            <th>Interest earned</th>
            <th>Total Interest</th>
            <th>Total Investment</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((eachYearData) => {
            const totalInterest =
              eachYearData.valueEndOfYear -
              eachYearData.annualInvestment * eachYearData.year -
              initialInvestment;
            const totalInvestment = eachYearData.valueEndOfYear - totalInterest;
            return (
              <tr key={eachYearData.year}>
                <td>{eachYearData.year}</td>
                <td>{formatter.format(eachYearData.valueEndOfYear)}</td>
                <td>{formatter.format(eachYearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvestment)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

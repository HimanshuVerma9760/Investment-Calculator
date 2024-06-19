import { calculateInvestmentResults } from "../util/investment";

export default function Results({ inputs }) {
  const resultData = calculateInvestmentResults(inputs);
  console.log(resultData);
  return <></>;
}

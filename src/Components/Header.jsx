import moneyBag from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <>
      <header id="header">
        <img src={moneyBag} alt="moneyBag" />
        <h1>Investment Calculator</h1>
      </header>
    </>
  );
}

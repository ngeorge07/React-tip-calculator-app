import "./App.css";

import { useState, useEffect } from "react";

import InputField from "./components/InputField";
import PercentageBtn from "./components/PercentageBtn";
import ResultField from "./components/ResultField";

function App() {
  const percentages = [0, 5, 10, 15, 25, 50];

  const [billPrice, setBillPrice] = useState(0);
  const [nrPeople, setNrPeople] = useState(1);

  const [tipPercentage, setTipPercentage] = useState(0);

  const [resultPerson, setResultPerson] = useState(0);
  const [totalResult, setTotalResult] = useState(0);

  useEffect(() => {
    if (billPrice >= 0 && nrPeople >= 1) {
      setResultPerson((billPrice * tipPercentage) / 100 / nrPeople);
      setTotalResult(billPrice / nrPeople + resultPerson);
    }
  }, [billPrice, tipPercentage, nrPeople, resultPerson]);

  return (
    <div className="App">
      <InputField
        text="Bill"
        id="billInput"
        value={billPrice < 0 ? 0 : billPrice}
        setVar={setBillPrice}
      />

      <InputField
        text="Number of People"
        id="nrPeople"
        value={nrPeople <= 0 ? "" : nrPeople}
        setVar={setNrPeople}
      />

      <div>
        {percentages.map((i) => (
          <PercentageBtn
            id={i}
            key={i}
            tipPercentage={tipPercentage}
            setTipPercentage={setTipPercentage}
          />
        ))}
      </div>

      <ResultField result={resultPerson} />
      <ResultField result={totalResult} />

      <button
        onClick={() => {
          setBillPrice(0);
          setNrPeople(1);
          setTipPercentage(0);
        }}
        disabled={billPrice === 0 || billPrice === "" ? true : false}
      >
        Reset
      </button>
    </div>
  );
}

export default App;

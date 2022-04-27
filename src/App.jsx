import "./App.css";

import { useState, useEffect } from "react";

import InputField from "./components/InputField";
import PercentageBtn from "./components/PercentageBtn";

function App() {
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
        <PercentageBtn
          id={5}
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
        />

        <PercentageBtn
          id={10}
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
        />

        <PercentageBtn
          id={15}
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
        />

        <PercentageBtn
          id={25}
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
        />

        <PercentageBtn
          id={50}
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
        />
      </div>

      <p className="m-5">{resultPerson.toFixed(2)}</p>
      <p className="m-5">{totalResult.toFixed(2)}</p>

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

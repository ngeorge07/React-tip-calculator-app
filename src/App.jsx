import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [billPrice, setBillPrice] = useState(0);
  const [resultPerson, setResultPerson] = useState(0);
  const [totalResult, setTotalResult] = useState(0);

  const [tipPercentage, setTipPercentage] = useState(0);
  const [nrPeople, setNrPeople] = useState(1);

  useEffect(() => {
    if (billPrice >= 0 && nrPeople >= 1) {
      setResultPerson((billPrice * tipPercentage) / 100 / nrPeople);
    }
  }, [billPrice, tipPercentage, nrPeople]);

  useEffect(() => {
    if (billPrice >= 0 && nrPeople >= 1) {
      setTotalResult(billPrice / nrPeople + resultPerson);
    }
  }, [billPrice, tipPercentage, nrPeople, resultPerson]);

  const billPriceChange = (e) => setBillPrice(e.target.value);
  const nrPeopleChange = (e) => setNrPeople(e.target.value);

  return (
    <div className="App">
      <input
        className="border-solid border-2 border-indigo-600"
        type="number"
        name="tip"
        onChange={billPriceChange}
        onFocus={(e) => e.currentTarget.select()}
        value={billPrice < 0 ? 0 : billPrice}
      />

      <input
        className="border-solid border-2 border-indigo-600"
        type="number"
        name="people"
        onChange={nrPeopleChange}
        onFocus={(e) => e.currentTarget.select()}
        value={nrPeople <= 0 ? "" : nrPeople}
      />

      <input
        onChange={() => setTipPercentage(5)}
        checked={tipPercentage === 5}
        id="5"
        type="radio"
        name="amount"
      />
      <label htmlFor="5">5%</label>

      <input
        onChange={() => setTipPercentage(10)}
        checked={tipPercentage === 10}
        id="10"
        type="radio"
        name="amount"
      />
      <label htmlFor="10">10%</label>

      <input
        onChange={() => setTipPercentage(15)}
        checked={tipPercentage === 15}
        id="15"
        type="radio"
        name="amount"
      />
      <label htmlFor="15">15%</label>

      <p className="m-5">{resultPerson.toFixed(2)}</p>
      <p className="m-5">{totalResult.toFixed(2)}</p>

      <button
        onClick={() => {
          setBillPrice(0);
          setNrPeople(1);
          setTipPercentage(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;

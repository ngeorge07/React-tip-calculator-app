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
    <>
      <h1 className="font-primaryFont text-3xl text-center my-20 text-[#00494d]">
        SPLITTER
      </h1>

      <div className="flex gap-6 bg-white max-w-xl m-auto p-4 rounded-xl">
        <div>
          <InputField
            text="Bill $"
            id="billInput"
            value={billPrice < 0 ? 0 : billPrice}
            setVar={setBillPrice}
          />

          <fieldset>
            <legend>Select Tip %</legend>
            {percentages.map((i) => (
              <PercentageBtn
                id={i}
                key={i}
                tipPercentage={tipPercentage}
                setTipPercentage={setTipPercentage}
              />
            ))}
          </fieldset>

          <InputField
            text="Number of People"
            id="nrPeople"
            value={nrPeople <= 0 ? "" : nrPeople}
            setVar={setNrPeople}
          />
        </div>

        <div>
          <ResultField text={"Tip Amount / person:"} result={resultPerson} />
          <ResultField text={"Total / person:"} result={totalResult} />

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
      </div>
    </>
  );
}

export default App;

import "./App.css";

import { useState, useEffect } from "react";

import InputField from "./components/InputField";
import PercentageBtn from "./components/PercentageBtn";
import ResultField from "./components/ResultField";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <Header />
      <main className="flex flex-col gap-6 bg-white max-w-xs m-auto p-4 rounded-xl">
        <section className="flex flex-col gap-6">
          <InputField
            text="Bill"
            id="billInput"
            value={billPrice < 0 ? 0 : billPrice}
            setVar={setBillPrice}
          />

          <fieldset>
            <legend className="font-spaceMono">Select Tip %</legend>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {percentages.map((i) => (
                <PercentageBtn
                  id={i}
                  key={i}
                  tipPercentage={tipPercentage}
                  setTipPercentage={setTipPercentage}
                />
              ))}
            </div>
          </fieldset>

          <InputField
            text="Number of People"
            id="nrPeople"
            value={nrPeople <= 0 ? "" : nrPeople}
            setVar={setNrPeople}
          />
        </section>

        <section className="bg-dark text-lightText rounded-xl p-5 flex flex-col gap-5">
          <ResultField text={"Tip Amount  /person"} result={resultPerson} />
          <ResultField text={"Total Amount  /person"} result={totalResult} />

          <button
            onClick={() => {
              setBillPrice(0);
              setNrPeople(1);
              setTipPercentage(0);
              setResultPerson(0);
            }}
            disabled={billPrice === 0 || billPrice === "" ? true : false}
            className="w-full text-center text-dark text-xl bg-lightbg rounded-md py-2 font-spaceMono mt-5 font-bold disabled:opacity-50"
          >
            Reset
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

export default function PercentageBtn({ id, tipPercentage, setTipPercentage }) {
  return (
    <div className="font-spaceMono">
      <input
        id={id}
        name={`${id}%`}
        checked={tipPercentage === id}
        onChange={() => setTipPercentage(id)}
        type="radio"
        className="appearance-none peer"
      />
      <label
        className="bg-dark peer-checked:bg-lightbg text-lightText inline-block w-full text-center py-1.5 rounded-md cursor-pointer"
        htmlFor={id}
      >
        {id}%
      </label>
    </div>
  );
}

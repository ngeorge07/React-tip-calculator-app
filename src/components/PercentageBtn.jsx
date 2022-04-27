export default function PercentageBtn({ id, tipPercentage, setTipPercentage }) {
  return (
    <div>
      <input
        id={id}
        name={`${id}%`}
        checked={tipPercentage === id}
        onChange={() => setTipPercentage(id)}
        type="radio"
        className="appearance-none"
      />
      <label className="bg-dark text-lightText" htmlFor={id}>
        {id}%
      </label>
    </div>
  );
}

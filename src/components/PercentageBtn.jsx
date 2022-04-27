export default function PercentageBtn({ id, tipPercentage, setTipPercentage }) {
  return (
    <div>
      <input
        id={id}
        name={`${id}%`}
        checked={tipPercentage === id}
        onChange={() => setTipPercentage(id)}
        type="radio"
      />
      <label htmlFor={id}>{id}%</label>
    </div>
  );
}

export default function InputField({ text, id, name, value, setVar }) {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input
        id={id}
        className="border-solid border-2 border-indigo-600"
        type="number"
        name={name}
        onChange={(e) => setVar(e.target.value)}
        onFocus={(e) => e.currentTarget.select()}
        value={value}
        // value={nrPeople <= 0 ? "" : nrPeople}
      />
    </div>
  );
}

export default function InputField({ text, id, value, setVar }) {
  return (
    <div className="flex flex-col gap-1 font-spaceMono">
      <label htmlFor={id}>{text}</label>
      <input
        id={id}
        className="bg-[#c5e4e7] appearance-none text-dark text-2xl p-1 pl-3 rounded-md"
        type="number"
        name={id}
        onChange={(e) => setVar(e.target.value)}
        onFocus={(e) => e.currentTarget.select()}
        value={value}
        // value={nrPeople <= 0 ? "" : nrPeople}
      />
    </div>
  );
}

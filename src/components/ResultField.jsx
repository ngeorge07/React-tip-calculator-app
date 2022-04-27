export default function ResultField({ text, result }) {
  return (
    <p className="font-spaceMono flex justify-between">
      {text} <span className="text-3xl">{result.toFixed(2)}$</span>
    </p>
  );
}

export default function ResultField({ text, result }) {
  return (
    <div>
      {text} {result.toFixed(2)}$
    </div>
  );
}

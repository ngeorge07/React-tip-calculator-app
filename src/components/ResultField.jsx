export default function ResultField({ result }) {
  return <div className="m-5">{result.toFixed(2)}</div>;
}

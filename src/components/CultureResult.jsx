export default function CultureResults({ results }) {
  if (!results) return null;

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-3">배양 검사 결과</h2>
      <ul className="text-sm text-gray-700 space-y-1">
        {results.map((r, idx) => (
          <li key={idx}>• {r}</li>
        ))}
      </ul>
    </div>
  );
}
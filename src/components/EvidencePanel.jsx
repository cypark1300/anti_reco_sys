export default function EvidencePanel({ data }) {
  if (!data) {
    return (
      <div className="bg-white p-5 rounded-xl shadow min-h-[300px] text-gray-400 flex items-center justify-center">
        항생제를 선택하면 근거가 표시됩니다
      </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow min-h-[300px]">
      <h2 className="text-lg font-semibold mb-2">{data.name} 근거</h2>

      <div className="text-sm text-gray-700 space-y-3 mt-3">
        <p>📌 {data.reason}</p>
        <p>📌 용량: {data.dose}</p>
        <p>📌 점수: {(data.score * 100).toFixed(1)}%</p>
      </div>
    </div>
  );
}
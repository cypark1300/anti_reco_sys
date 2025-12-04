export default function DoseAdjustmentInfo({ info }) {
  if (!info) return null;

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">용량 조정</h2>
      <p className="text-sm text-gray-700 whitespace-pre-line">{info}</p>
    </div>
  );
}
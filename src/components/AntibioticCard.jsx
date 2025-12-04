import { formatDose, formatScore } from "../lib/utils";

export default function AntibioticCard({ data, isSelected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`p-4 border rounded-lg cursor-pointer transition ${
        isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"
      }`}
    >
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-semibold text-lg">{data.name}</h3>
        <span className="text-xs text-gray-500">{formatScore(data.score)}</span>
      </div>

      <p className="text-sm text-gray-700 mb-1">
        용량: <span className="font-medium">{formatDose(data.dose)}</span>
      </p>

      <p className="text-xs text-gray-500">{data.reason}</p>
    </div>
  );
}

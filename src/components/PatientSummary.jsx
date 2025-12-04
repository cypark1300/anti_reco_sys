export default function PatientSummary({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-3">환자 정보</h2>
      <ul className="text-sm text-gray-700 space-y-1">
        <li>나이: {data.age}</li>
        <li>체중: {data.weight}</li>
        <li>CrCl: {data.crcl}</li>
      </ul>
    </div>
  );
}

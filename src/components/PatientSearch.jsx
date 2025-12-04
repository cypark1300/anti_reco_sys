export default function PatientSearch({ onSelect }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-3">환자 검색</h2>

      <input
        placeholder="환자 이름 / 환자번호"
        className="w-full p-3 bg-[#F3F3F5] rounded-lg text-sm"
      />

      <p className="text-xs text-gray-400 mt-2 ml-1">
        실제 EMR 연동해야 함
      </p>
    </div>
  );
}

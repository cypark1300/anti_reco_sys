import { useState } from "react";
import { fetchDiagnosisList } from "../lib/fetchDiagnosis";

export default function DiagnosisInput({
  selectedDiagnosis,
  setSelectedDiagnosis,
  onSearch,
}) {
  const [keyword, setKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInput = async (v) => {
    setKeyword(v);
    const list = await fetchDiagnosisList(v);
    setSuggestions(list);
  };

  const handleSelect = (d) => {
    setSelectedDiagnosis(d);
    setKeyword(d);
    setSuggestions([]);
    onSearch();
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-3">진단명 입력</h2>

      <input
        value={keyword}
        onChange={(e) => handleInput(e.target.value)}
        placeholder="진단명 또는 증상 검색"
        className="w-full p-3 bg-[#F3F3F5] rounded-lg text-sm outline-none"
      />

      {suggestions.length > 0 && (
        <div className="mt-2 border rounded-md bg-white shadow">
          {suggestions.map((item, idx) => (
            <div
              key={idx}
              className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-gray-400 mt-2 ml-1">
        💡 증상으로 입력해도 검색됩니다.
      </p>
    </div>
  );
}
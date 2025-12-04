import { useState } from "react";

export default function PatientFactors({ patientFactors, setPatientFactors, onUpdate }) {

  const update = (key, value) => {
    const updated = { ...patientFactors, [key]: value };
    setPatientFactors(updated);
    onUpdate();
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">환자 요인</h2>

      {/* 나이 */}
      <div className="mb-3">
        <label className="text-sm font-medium block mb-1">나이</label>
        <input
          type="number"
          placeholder="나이 입력"
          className="w-full p-3 bg-[#F3F3F5] rounded-lg text-sm"
          onChange={(e) => update("age", e.target.value)}
        />
      </div>

      {/* 체중 */}
      <div className="mb-3">
        <label className="text-sm font-medium block mb-1">체중 (kg)</label>
        <input
          type="number"
          placeholder="체중"
          className="w-full p-3 bg-[#F3F3F5] rounded-lg text-sm"
          onChange={(e) => update("weight", e.target.value)}
        />
      </div>

      {/* CrCl */}
      <div className="mb-3">
        <label className="text-sm font-medium block mb-1">CrCl (mL/min)</label>
        <input
          type="number"
          placeholder="CrCl"
          className="w-full p-3 bg-[#F3F3F5] rounded-lg text-sm"
          onChange={(e) => update("crcl", e.target.value)}
        />
      </div>

      {/* 여러 체크 */}
      <div className="flex flex-col gap-2 mt-2">
        {[
          ["pregnant", "임신 여부"],
          ["dialysis", "투석 여부"],
          ["icu", "ICU 입실 여부"],
          ["catheter", "요로카테터"],
        ].map(([key, label]) => (
          <label key={key} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              onChange={(e) => update(key, e.target.checked)}
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
}
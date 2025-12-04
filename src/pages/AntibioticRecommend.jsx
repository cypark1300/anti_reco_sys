// src/pages/AntibioticRecommend.jsx

import { useState } from "react";

import DiagnosisInput from "../components/DiagnosisInput";
import PatientFactors from "../components/PatientFactors";
import AntibioticCard from "../components/AntibioticCard";
import EvidencePanel from "../components/EvidencePanel";

import { fetchAntibioticRecommendations } from "../lib/fetchRecommendations";

export default function AntibioticRecommend() {
  const [selectedDiagnosis, setSelectedDiagnosis] = useState("");
  const [patientFactors, setPatientFactors] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [selectedAntibiotic, setSelectedAntibiotic] = useState(null);

  // 진단/요인 선택 후 추천 가져오기
  const loadRecommendations = async () => {
    const data = await fetchAntibioticRecommendations(
      selectedDiagnosis,
      patientFactors
    );
    setRecommendations(data);
  };

  return (
    <div className="w-full flex flex-col gap-6 p-6">

      {/* 페이지 헤더 */}
      <header className="flex flex-col mb-2">
        <h1 className="text-2xl font-semibold">응급실 항생제 추천 시스템</h1>
        <p className="text-gray-500">AI-based Antibiotic Recommendation</p>
      </header>

      {/* 3단 메인 레이아웃 */}
      <div className="flex gap-6">

        {/* 왼쪽 입력 패널 */}
        <div className="w-[28%] flex flex-col gap-6">
          <DiagnosisInput
            selectedDiagnosis={selectedDiagnosis}
            setSelectedDiagnosis={setSelectedDiagnosis}
            onSearch={loadRecommendations}
          />

          <PatientFactors
            patientFactors={patientFactors}
            setPatientFactors={setPatientFactors}
            onUpdate={loadRecommendations}
          />
        </div>

        {/* 중앙 추천 패널 */}
        <div className="w-[42%] bg-white rounded-xl shadow p-5 min-h-[500px]">
          {recommendations.length === 0 ? (
            <div className="text-center text-gray-400 mt-24">
              진단명을 입력하면 항생제 추천이 표시됩니다
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {recommendations.map((item, idx) => (
                <AntibioticCard
                  key={idx}
                  data={item}
                  isSelected={selectedAntibiotic?.name === item.name}
                  onSelect={() => setSelectedAntibiotic(item)}
                />
              ))}
            </div>
          )}
        </div>

        {/* 오른쪽 근거 패널 */}
        <div className="w-[30%]">
          <EvidencePanel data={selectedAntibiotic} />
        </div>
      </div>
    </div>
  );
}
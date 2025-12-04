// 항생제 추천 결과 API (목업 여기에 서버 붙여야함)

// 나중에 실서버에서 추천 결과 받아오면 이 부분 교체
export async function fetchAntibioticRecommendations(diagnosis, patientFactors) {
  if (!diagnosis) return [];

  // 임시 목업. 실제 서버 붙을 때 여기만 교체하면 됨.
  return [
    {
      name: "Ceftriaxone",
      dose: "2g IV q24h",
      score: 0.92,
      reason: `${diagnosis} 1차 권고 항생제`,
    },
    {
      name: "Piperacillin/Tazobactam",
      dose: "4.5g IV q6h",
      score: 0.88,
      reason: "중증 감염 의심 시 고려",
    },
    {
      name: "Levofloxacin",
      dose: "750mg IV q24h",
      score: 0.74,
      reason: "대체 옵션",
    },
  ];
}

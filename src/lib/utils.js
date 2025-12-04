// 공통적으로 쓰는 변환, 포맷팅 함수

export function formatScore(score) {
  if (score == null) return "-";
  return (score * 100).toFixed(1) + "%";
}

export function formatDose(dose) {
  return dose || "용량 정보 없음";
}
// 진단명 불러오기.. 근데 이건 서버 안붙이고 여기다 써서 해도 될 듯

// 실제 서버 구축 후 여기만 API로 교체하면 됨.
export async function fetchDiagnosisList(keyword) {
  if (!keyword) return [];

  // 임시 목업 데이터 — 필요하면 수정 가능
  const mockData = [
    "폐렴",
    "요로감염",
    "패혈증",
    "담낭염",
    "복막염",
    "뇌수막염",
    "신우신염",
    "장폐색",
    "급성췌장염",
  ];

  return mockData.filter((item) => item.includes(keyword));
}

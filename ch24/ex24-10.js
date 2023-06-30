// 카운트 상태 변경 함수
const increase = function () {
  // 카운트 상태 변수
  let num = 0;

  // 카운트 상태를 1만큼 증가
  return ++num;
};

// 이전 상태를 유지하지 못함
console.log(increase());
console.log(increase());
console.log(increase());
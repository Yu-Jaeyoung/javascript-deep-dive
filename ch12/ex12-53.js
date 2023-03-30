function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i); // i를 전달하면서 호출
  }
}
// logOdds 함수는 단 한번만 생성
var logOdds = function (i) {
  if (i % 2) console.log(i);
};

// 고차 함수에 함수 참조를 전달
repeat(5, logOdds); // 1, 3
// n만큼 어떤 일을 반복
function repeat1(n) {
  // i를 출력
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}

repeat1(5);

// n만큼 어떤 일을 반복
function repeat2(n) {
  // i를 출력
  for (var i = 0; i < n; i++) {
    // i가 홀수일 때만 출력
    if (i % 2) console.log(i);
  }
}

repeat2(5);
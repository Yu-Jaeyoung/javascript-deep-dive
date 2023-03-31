var i = 10;

// for문에서 선언한 i는 전역변수
// 이미 선언된 전역 변수가 i가 있으면 중복 선언이 됨
for(var i = 0; i<5; i ++){
  console.log(i); // 0 1 2 3 4
}

// 의도치 않게 변수의 값이 변경
console.log(i);
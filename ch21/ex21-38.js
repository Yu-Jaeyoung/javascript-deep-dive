// 전역 변수 x는 호이스팅이 발생
console.log(x);
// 전역 변수가 아니라 단지 전역 객체의 프로퍼티인 y는 호이스팅이 발생하지 않음
console.log(y);

var x = 10;

function foo() {
  // 선언하지 않은 식별자에 값을 할당
  y = 20;
}

foo();

// 선언하지 않은 식별자 y를 전역에서 참조할 수 있음
console.log(x + y);
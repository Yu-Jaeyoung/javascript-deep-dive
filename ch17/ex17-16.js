function foo() {}

// 일반 함수로서 호출
// [[Call]]이 호출됨. 모든 함수 객체는 [[Call]]이 구현되어 있음
foo();

// 생성자 함수로서 호출
// [[Construct]]가 호출됨. 이떄 [[Construct]]를 갖지 않는다면 에러가 발생
new foo();
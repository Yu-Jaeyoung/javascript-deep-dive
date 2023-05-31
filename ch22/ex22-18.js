function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킴
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않음. 즉, 일반적인 함수의 호출
const circle3 = Circle(15);

// 일반 함수로 호출된 Circle에는 반환문이 없으므로 암묵적으로 undefined를 반환
console.log(circle3);

// 일반 함수로 호출된 Circle 내부의 this는 전역 객체를 가리킴
console.log(radius);
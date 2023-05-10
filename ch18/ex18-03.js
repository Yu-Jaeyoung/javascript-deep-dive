function square(number) {
  return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));

//__proto__는 square 함수의 프로퍼티가 아님
console.log(Object.getOwnPropertyDescriptor(square,'__proto__'));
// __proto__는 Object.prototype 객체의 접근자 프로퍼티

// square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속 받음
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

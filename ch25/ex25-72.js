const base = {
  name: 'Lee',
  sayHi() {
    return `Hi! ${this.name}`;
  },
};

const derived = {
  __proto__: base,
  // ES6의 축약 표현으로 정의한 메서드. 따라서 [[HomeObject]]를 가짐
  sayHi() {
    return `${super.sayHi()}. How are you doing`;
  },
};

console.log(derived.sayHi());
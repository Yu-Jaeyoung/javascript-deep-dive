const obj = {
  x: 1,
  // foo는 메서드
  foo() {
    return this.x;
  },

  // bar에 바인딩된 함수는 메서드가 아닌 일반 함수
  bar: function () {
    return this.x;
  },
};

// obj.foo는 constructor가 아닌 ES6 메서드이므로 prototype 프로퍼티가 없음
console.log(obj.foo.hasOwnProperty('prototype'));

// obj.bar는 constructor인 일반 함수이므로 prototype 프로퍼티가 있음
console.log(obj.bar.hasOwnProperty('prototype'));
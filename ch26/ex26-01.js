var foo = function () {
  return 1;
};

// 일반적인 함수로서 호출
console.log(foo());

// 생성자 함수로서 호출
console.log(new foo());

// 메서드로서 호출
var obj = {foo: foo};
console.log(obj.foo());
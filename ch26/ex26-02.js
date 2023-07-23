var foo = function () { };

// ES6 이전의 모든 함수는 callable 이먄서 constructor
console.log(foo());
console.log(new foo());
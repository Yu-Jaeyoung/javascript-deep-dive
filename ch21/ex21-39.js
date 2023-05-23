var x = 10;

function foo() {
  // 선언하지 않은 식별자에 값을 할당
  y = 20;
  console.log(x + y);
}

foo();

console.log(window.x);
console.log(window.y);

delete x;
delete y;

console.log(window.x);
console.log(window.y);
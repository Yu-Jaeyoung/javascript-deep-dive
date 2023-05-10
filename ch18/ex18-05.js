function multiply(x, y) {
  // 이터레이터
  const iterator = arguments[Symbol.iterator]();

  // 이터레이터의 next 메서드를 호출하여 이터러블 객체 arguments를 순회
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());

  return x * y;
}

multiply(1, 2, 3);
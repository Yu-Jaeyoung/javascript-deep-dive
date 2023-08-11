const obj = {a: 1, b: 2};

// 일반 객체는 Symbol.iterator 메서드를 구현하거나 상속받지 않음
// 따라서 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아님

// 이터러블이 아닌 일반 객체는 for ... of 문으로 순회할 수 없음
for (const item of obj) {
  console.log(item); // TypeError: obj is not iterable
}

// 이터러블이 아닌 일반 객체는 배열 디스트럭처링 할당의 대상으로 사용할 수 없음
const [a, b] = obj; // TypeError: obj is not iterable
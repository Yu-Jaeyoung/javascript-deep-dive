// 배열은 이터러블 프로토콜을 준수한 이터러블
const array = [1,2,3];

// Symbol.iterator 메서드는 이터레이터를 반환
// 이터레이터는 next 메서드를 가짐
const iterator = array[Symbol.iterator]();

// next 메서드를 호출하면 이터러블을 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환
// 이터레이터 리절트 객체는 value와 done 프로퍼티를 갖는 객체
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
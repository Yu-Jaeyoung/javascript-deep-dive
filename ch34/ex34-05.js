// 배열은 이터러블 프로토콜을 준수한 이터러블
const array = [1, 2, 3];

// Symbol.iterator 메서드는 이터레이터를 반환
const iterator = array[Symbol.iterator]();

// Symbol.iterator 메서드가 반환한 이ㅓ레이터는 next 메서드를 가짐
console.log('next' in iterator);
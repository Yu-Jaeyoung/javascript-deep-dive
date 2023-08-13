// ..[1, 2, 3]은 [1, 2, 3]을 개별 요소로 분리(-> 1, 2, 3)
console.log(...[1, 2, 3]);

// 문자열은 이터러블
console.log(...'Hello');

// Map과 Set은 이터러블
console.log(...new Map([['a', '1'], ['b', '2']]));
console.log(...new Set([1, 2, 3,]));

// 이터러블이 아닌 일반 객체는 스프레드 문법의 대상이 될 수 없음
console.log(...{a: 1, b: 2});
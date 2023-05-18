// 프로토타입이 null인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체를 생성
const obj = Object.create(null);
obj.a = 1;

console.log(Object.getPrototypeOf(obj) === null);

// obj는 Object.prototpye의 빌트인 메서드를 사용할 수 없음
console.log(obj.hasOwnProperty("a"));
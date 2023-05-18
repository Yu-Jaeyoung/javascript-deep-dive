// obj는 프로토타입 체인의 종점. 따라서 Object.__proto__를 상속받을 수 없음
const obj = Object.create(null);

// obj는 Object.__proto__를 상속받을 수 없음
console.log(obj.__proto__);

// 따라서 __proto__보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋음
console.log(Object.getPrototypeOf(obj));
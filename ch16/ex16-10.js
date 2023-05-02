const person = {name: "Lee"};

// person 객체는 확장이 금지된 객체가 아님
console.log(Object.isExtensible(person)); // true

// person 객체의 확장을 금지하여 프로퍼티 추가를 금지
Object.preventExtensions(person);

// person 객체는 확장이 금지된 객체
console.log(Object.isExtensible(person)); // false

// 프로퍼티 추가가 금지됨
person.age = 20; // 무시, strict mode에서는 에러
console.log(person); // { name: 'Lee' }

// 프로퍼티 추가는 금지되지만 삭제는 가능
delete person.name;
console.log(person); // {}

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지
Object.defineProperty(person, "age", {value: 20});
//TypeError: Cannot define property age, object is not extensible
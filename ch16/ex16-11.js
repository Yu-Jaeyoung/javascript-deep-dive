const person = {name: "Lee"};

// person 객체는 밀봉(seal)된 객체가 아님
console.log(Object.isSealed(person)); // false

// person 객체를 밀봉하여 프로퍼티 추가, 삭제, 재정의를 금지
Object.seal(person);

// 밀봉(seal)된 객체는 configurable이 false
console.log(Object.getOwnPropertyDescriptors(person));
// { name: { value: 'Lee', writable: true, enumerable: true, configurable: false } }

// 프로퍼티 추가가 금지됨
person.age = 20; // 무시, strict mode에서는 에러
console.log(person); // { name: 'Lee' }

// 프로퍼티 삭제가 금지됨
delete person.name;  // 무시, strict mode에서는 에러
console.log(person); // { name: 'Lee' }

// 프로퍼티 어트리뷰트 재정의가 금지
Object.defineProperty(person, "name", {configurable: true});
//TypeError: Cannot redefine property: name
const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, "firstName", {
  value: "Ungmo",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, "lastName", {
  value: "Lee",
});

let discriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log("firstName", discriptor);
/*
firstName {
  value: 'Ungmo',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값
descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);
/*
lastName {
  수
}
*/

// [[Enumerable]]의 값이 false인 경우
// 해당 프로퍼티는 for... in 문이나 Object.keys 등으로 열거할 수 없음
// lastName 프로퍼티는 [[Enumable]]의 값이 false이므로 열거되지 않음
console.log(Object.keys(person)); // [ "firstName" ]

// [[Writable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없음
// lastName 프로퍼티는 [[Configurable]]의 값이 false이므로 삭제할 수 없음
// 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시됨
person.lastName = "Kim";

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없음
// lastName 프로퍼티는 [[Configurable]]의 값이 false이므로 삭제할 수 없음
// 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시됨
delete person.lastName;

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의할 수 없음
// Object.defineProperty(person, 'lastName', { enumerable: true });
// Uncaught TypeError: Cannot redefine property: lastName

descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);
// lastName { value: "Lee", writable: false, enumerable: false, configurable: false }

// 접근자 프로퍼티 정의
Object.defineProperty(person, "fullName", {
  // getter 힘수
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
  enumerable: true,
  configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log("fullName", descriptor);
// fullName { get: f, set: f, enumerable: true, configurable: true }

person.fullName = "Heegun Lee";
console.log(person); // { firstName: "Heegun", lastName: "Lee" } fullName이 출력되는중 -> 이유 ??
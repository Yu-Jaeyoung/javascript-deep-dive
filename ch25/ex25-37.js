class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
}

const me = new Person('Ungmo', 'Lee');

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
// console.log(`${me.firstName} ${me.lastName}`);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로피트 fullName에 값을 저장하면 setter 함수가 호출됨
me.fullName = 'Heegun Lee';
// console.log(me);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출됨
// console.log(me.fullName);

// fullName은 접근자 프로퍼티
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 가짐
// console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName'));

// Object.getOwnPropertyNames는 비열거형(non-enumerable)을 포함한
// 모든 프로퍼티의 이름을 반환 (상속 제외)
console.log(Object.getOwnPropertyNames(me));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(me)));
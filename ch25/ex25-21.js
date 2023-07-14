class Person {
  constructor(name) {
    this.name = name;

    // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시됨
    return 100;
  }
}

// constructor에서 명시적으로 반환한 빈 객체가 반환
const me = new Person("Lee");
console.log(me);
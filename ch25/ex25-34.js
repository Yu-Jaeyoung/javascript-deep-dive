class Person {
  constructor(name) {
    // 인스턴스 프로퍼티
    this.name = name; // name 프로퍼티는 public
  }
}

const me = new Person("Lee");

// name은 public
console.log(me.name);
class Person {
  constructor(name, address) {
    // 인수로 인스턴스 초기화
    this.name = name;
    this.address = address;
  }
}

// 인수로 초기값을 전달. 초기값을 constructor에 전달됨
const me = new Person("Lee", "Seoul");
console.log(me);
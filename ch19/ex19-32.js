function Person(name) {
  this.name = name;
}

const me = new Person("Lee");

// hasOwnProperty는 Object.prototype의 메서드
// me 객체는 프로토타입 체인을 따라 hasOwnProperty 메서드를 검색하여 사용
console.log(me.hasOwnProperty("name"));
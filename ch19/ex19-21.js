// 화살표 함수는 non-constructor
const Person = name => {
  this.name = name;
};

// non-constructor는 프로토타입이 생성되지 않음
console.log(Person.prototype);
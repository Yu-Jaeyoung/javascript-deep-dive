var person = {
  name: "Lee",
};

// 참조 값을 복사(얕은 복사). copy와 person은 동일한 참조를 갖음
var copy = person;

// copy와 person은 동일한 객체를 참조
console.log(copy === person); // true

// copy를 통해 겍체를 변경
copy.name = "Kim";

// person을 통해 객체를 변경
person.address = "Seoul";

// copy와 person은 동일한 객체를 가리킴
// 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고 받음
console.log(person);  // {name : 'Kim', address: 'Seoul'}
console.log(copy);  // {name : 'Kim', address: 'Seoul'}

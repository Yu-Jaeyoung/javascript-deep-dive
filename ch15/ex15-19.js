const person = {
  name: "Lee",
};

// 객체는 변경 가능한 값, 따라서 재할당 없이 변경이 가능
person.name = "Kim";

console.log(person); // { name: "Kim" }
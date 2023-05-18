function Person(name) {
  this.name = name;
}

console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
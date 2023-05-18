function Person(name) {
  this.name = name;
}

const me = new Person("Lee");

console.log(Object.getPrototypeOf(me) === Person.prototype);
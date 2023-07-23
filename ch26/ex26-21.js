const person = (name => ({
  sayHi() {
    return `Hi? My Name is ${name}`;
  },
}))('Lee');

console.log(person.sayHi());
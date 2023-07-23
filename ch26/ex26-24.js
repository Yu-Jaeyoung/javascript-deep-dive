const Foo = () => { };
// 화살표 함수는 prototype 프로퍼티가 없음
console.log(Foo.hasOwnProperty('prototype'));
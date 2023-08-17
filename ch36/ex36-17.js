const str = 'Hello';
// String 래퍼 객체로부터 length 프로퍼티만 추출
const {length} = str;
console.log(length);

const todo = {id: 1, content: 'HTML', complete: true};
// todo 객체로부터 id 프로퍼티만 추출
const {id} = todo;
console.log(id);
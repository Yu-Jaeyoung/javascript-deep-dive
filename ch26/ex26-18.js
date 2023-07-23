const create1 = (id, content) => ({id, content});
console.log(create1(1, 'JavaScript'));

// 위 표현은 다음과 동일
const create2 = (id, content) => { return {id, content}; };
console.log(create2(1,'JavaScript'));
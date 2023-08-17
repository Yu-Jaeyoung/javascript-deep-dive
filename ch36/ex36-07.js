// 기본값
const [a, b, c = 3] = [1, 2];
console.log(a, b, c);

// 기본값 보다 할당된 값이 우선됨
const [e, f = 10, g = 3] = [1, 2];
console.log(e, f, g);
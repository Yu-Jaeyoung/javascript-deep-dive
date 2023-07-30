const target = 'abc#123';

// 특수 문자를 제거
console.log(target.replace(/[^A-Za-z0-9]/gi, ''));
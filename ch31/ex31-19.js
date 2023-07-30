const target = 'A AA B BB Aa Bb';

// 'A' or 'B'를 전역 검색
const regExp = /A|B/g;

console.log(target.match(regExp));

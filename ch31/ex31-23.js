const target = 'AA BB Aa Bb 12';

// 'A' ~ 'Z' or 'a' ~ 'z'기 한 번 이상 반복되는 문자열을 전역 검색
const regExp = /[A-Za-z]+/g;

console.log(target.match(regExp));
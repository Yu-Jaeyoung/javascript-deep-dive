const target = 'AA BB 12,345';

// '0' ~ '9' or ','가 한 번 이상 반복되는 문자열을 전역 검색
let regExp = /[\d,]+/g;

console.log(target.match(regExp));

// '0' ~ '9'가 아닌 문자(숫자가 아닌 문자) or ','가 한 번 이상 반복되는 문자열을 전역 검색
regExp = /[\D,]+/g;

console.log(target.match(regExp));
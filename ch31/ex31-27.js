const target = 'Aa Bb 12,345 _$%&';

// 알파벳, 숫자, 언더스코어, ','가 한 번 이상 반복되는 문자열을 전역 검색
let regExp = /[\w,]+/g;

console.log(target.match(regExp));

// 알파벳, 숫자, 언더스코어가 아닌 문자 or ','가 한 번 이상 반복되는 문자열을 전역 검색
regExp = /[\W,]+/g;

console.log(target.match(regExp));
// 유사 배열 객체를 반환하여 배열을 생성
console.log(Array.from({length: 2, 0: 'a', 1: 'b'}));

// 이터러블을 변환하여 배열을 생성. 문자열을 이터러블
console.log(Array.from('Hello'));
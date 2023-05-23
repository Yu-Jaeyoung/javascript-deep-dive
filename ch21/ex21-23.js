// 문자열을 실수로 해석하여 반환
console.log(parseFloat("3.14"));
console.log(parseFloat("10.00"));

// 공백으로 구분된 문자열은 첫 번쩨 문자열만 변환
console.log(parseFloat("34 45 66"));
console.log(parseFloat("40 years"));

// 첫 번쩨 문지열을 숫자로 변환할 수 없다면 NaN을 반환
console.log(parseFloat("He was 40"));

// 앞뒤 공백은 무시
console.log(parseFloat(" 60 "));
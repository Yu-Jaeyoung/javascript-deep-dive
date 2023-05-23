const x = 15;

// 10진수 15를 2진수로 변환하여 그 결과를 문자열로 반환
console.log(x.toString(2));

// 문자열 '1111'을 2진수로 해석하고 그 결과를 10진수 정수로 반환
console.log(x.toString(8));

// 문자열 '17'을 8진수로 해석하고 그 결과를 10진수 정수로 반환
console.log(parseInt(x.toString(8), 8));

// 10진수 15를 16진수로 변환하여 그 결과를 문자열로 반환
console.log(x.toString(16));

// 문자열 'f'를 16진수로 해석하고 그 결과를 10진수 정수로 반환
console.log(parseInt(x.toString(16), 16));

// 숫자값을 문자열로 반환
console.log(x.toString());

// 문자열 '15'진수로 해석하고 그 결과를 10진수 정수로 반환
console.log(parseInt(x.toString()));

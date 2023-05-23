// 숫자
console.log(isNaN(NaN));
console.log(isNaN(10));

// 문자열
console.log(isNaN("blabla"));
console.log(isNaN("10"));
console.log(isNaN("10.12"));
console.log(isNaN(""));
console.log(isNaN(" "));

// 불리언
console.log(isNaN(true));
console.log(isNaN(false));

// undefined
console.log(isNaN(undefined));

// 객체
isNaN({});

// date
console.log(isNaN(new Date()));
console.log(isNaN(new Date().toString()));
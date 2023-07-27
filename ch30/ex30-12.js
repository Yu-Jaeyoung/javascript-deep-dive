const today = new Date();

// 월 지정
today.setMonth(0); // 1월
console.log(today.getMonth());

// 월/일 지정
today.setMonth(11, 1); // 12월 1일
console.log(today.getMonth());

const today = new Date();

// 분 지정
today.setMinutes(50);
console.log(today.getMinutes());

// 분/초/밀리초 지정
today.setMinutes(5, 10, 999);
console.log(today.getMinutes());
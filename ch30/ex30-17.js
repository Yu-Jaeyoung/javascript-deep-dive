const today = new Date();

// 시간 지정
today.setHours(7);
console.log(today.getHours());

// 시간/분/초/밀리초 지정
today.setHours(0, 0, 0, 0);
console.log(today.getHours());
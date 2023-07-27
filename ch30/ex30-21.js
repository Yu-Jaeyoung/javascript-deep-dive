const today = new Date();

// 초 지정
today.setSeconds(30);
console.log(today.getSeconds());

// 초/밀리초 지정
today.setSeconds(10, 0);
console.log(today.getSeconds());
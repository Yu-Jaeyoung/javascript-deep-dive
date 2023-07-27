const today = new Date();

// UTC와 today의 지정 locale KST와의 차이는 -9
console.log(today.getTimezoneOffset() / 60);
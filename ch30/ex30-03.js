// 한국 표준시 KST는 협정 세계시 UTC에 9시간을 더한 시간
console.log(new Date(0));

/**
 * 86,400,000ms는 1day를 의미
 * 1s = 1,000ms
 * 1m = 60s * 1000ms = 60,000ms
 * 1h = 60m * 60,000ms = 3,600,000ms
 * 1d = 24h * 3,600,000ms = 86,400,000ms
 * */

console.log(new Date(86400000));
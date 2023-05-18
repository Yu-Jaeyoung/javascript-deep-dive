const obj = {
  2: 2,
  3: 3,
  1: 1,
  b: "b",
  a: "a",
};

for (const key in obj) {
  // 객체 자신의 프로퍼티인지 확인
  if (!obj.hasOwnProperty(key)) continue;
  console.log(key + ": " + obj[key]);
}
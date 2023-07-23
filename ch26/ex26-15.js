// concise body
const power1 = x => x ** 2;
console.log(power1(2));

// 위 표현은 다음과 동일
// block body
const power2 = x => {
  return x ** 2;
};

console.log(power2(2));
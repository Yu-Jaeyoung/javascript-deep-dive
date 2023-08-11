// 피보나치 수열을 구현한 사용자 정의 이터러블을 반환하는 함수
// 수열의 최대값을 인수로 전달받음
const fibonacciFunc = function (max) {
  let [pre, cur] = [0, 1];
  
  // Symbol.iterator 메서드는 구현한 이터러블을 반환
  return {
    [Symbol.iterator]() {
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return {value: cur, done: cur >= max};
        }
      }
    }
  };
};

// 이터러블인 fibonacci 객체를 순회할 때마다 next 메서드가 호출됨
for (const num of fibonacciFunc(10)) {
  console.log(num);
}
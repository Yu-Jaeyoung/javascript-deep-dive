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

// fibonacciFunc 함수는 이터러블을 반홤
const iterable = fibonacciFunc(5);
// 이터러블의 Symbol.iterator 메서드는 이터레이터를 반환
const iterator = iterable[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

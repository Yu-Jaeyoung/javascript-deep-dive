// 피보나치 수열을 구현한 사용자 정의 이터러블
const fibonacci = {
  // Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 10;// 수열의 최대값
    
    // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환해야 하고
    // next 메서드는 이터레이터 리절트 객체를 반환해야함
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        // 이터레이터로 리절트 객체를 반환
        return {value: cur, done: cur >= max};
      }
    };
  }
};

// 이터러블은 스프레드 문법의 대상이 될 수 있음
const arr = [...fibonacci];
console.log(arr);

// 이터러블은 배열 디스트럭처링 할당의 대상이 될 수 있음
const [first, second, ...rest] = fibonacci;
console.log(first, second, rest);
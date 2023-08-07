const arr = new Array(3);
console.log(arr);

// 인수로 전달받은 값 1을 배열의 처음부터 끝까지 요소로 채움
const result = arr.fill(1);

// fill 메서드는 원본 배열을 직접 변경
console.log(arr);

// fill 메서드는 변경된 원본 배열을 반환
console.log(result);
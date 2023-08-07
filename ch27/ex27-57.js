const arr1 = [1, 2];
const arr2 = [3, 4];

// 배열 arr2를 원본 배열 arr1의
// 마지막 요소로 추가한 새로운 배열을 반환
// 인수로 값을 전달한 경우 배열을 해체하여 새로운 배열의 요소로 추가
let result = arr1.concat(arr2);
console.log(result);

// 숫자를 원본 배열 arr1의
// 마지막 요소로 추가한 새로운 배열을 반환
result = arr1.concat(3);
console.log(result);

// 배열 arr2와 숫자를 원본 배열 arr1의
// 마지막 요소로 추가한 새로운 배열을 반환
result = arr1.concat(arr2, 5);
console.log(result);

// 원본 배열은 변경되지 않음
console.log(arr1);
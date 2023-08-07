// 희소 배열
const arr = [1, , 3];

// 배열 arr에는 인덱스가 1인 요소가 존재하지 않음
console.log(Object.getOwnPropertyDescriptors(arr));

// 존재하지 않는 요소를 참조하면 undefined가 반환됨
console.log(arr[1]);
console.log(arr[3]);
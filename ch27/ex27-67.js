const arr = [1, 2, 3];

// arr[0]부터 arr[1] 이전(arr[1] 미포함)까지 복사하여 반환
console.log(arr.slice(0, 1));

// arr[1]부터 arr[2] 이전(arr[2] 미포함)까지 복사하여 반환
console.log(arr.slice(1, 2));

// 원본은 변경되지 않음
console.log(arr);
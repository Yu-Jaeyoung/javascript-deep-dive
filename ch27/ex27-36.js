const arr = [0, 1];

arr[100] = 100;

console.log(Object.getOwnPropertyDescriptors(arr));
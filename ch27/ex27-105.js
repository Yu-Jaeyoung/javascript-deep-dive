// 희소 배열
const arr = [1, , 3];

// for문으로 희소 배열 순회
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log();

// forEach 메서드는 희소 배열의 존재하지 않는 요소를
// 순회 대상에서 제외
console.log(arr.forEach(v => console.log(v)));
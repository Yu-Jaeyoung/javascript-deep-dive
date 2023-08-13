// 이터러블이 아닌 유사 배열 객체
const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};

// Array.from은 유사 배열 객체 또는 이터러블을 배열로 반환
console.log(Array.from(arrayLike));
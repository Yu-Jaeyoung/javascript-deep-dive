// 유사 배열 객체
const arrayLike = {
    '0': 'apple',
    '1': 'banana',
    '2': 'orange',
    length: 3
};

// 유사 배열 객체는 마칯 배열처럼 for 문으로 순회할 수 있음
for (let i = 0; i < arrayLike.length; i++) {
    console.log(arrayLike[i]);
}
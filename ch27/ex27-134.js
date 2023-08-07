const arr = ['hello', 'world'];

// flatMap은 1단계만 평탄화
console.log(arr.flatMap((str, index) => [index, [str, str.length]]));

// 평탄화 깊이를 지정해야 하면 flatMap 메서드를 사용하지 말고 map 메서드와 flat 메서드를 각각 호출
console.log(arr.map((str, index) => [index, [str, str.length]]).flat(2));

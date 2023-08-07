const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

const result = values.reduce(
    (unique, val, i, _values) =>
        // 현재 순회 중인 요소의 인덱스 i가 val의 인덱스와 같다면 val은 처음 순회하는 요소
        // 현재 순회 중인 요소의 인덱스 i가 val의 인덱스와 다르면 val은 중복된 요소
        // 처음 순회하는 요소만 초기값 []가 전달된 unique 배열에 담아 반환하면 중복된 요소는 제거됨
        _values.indexOf(val) === i ? [...unique, val] : unique, []
);

console.log(result);

// map 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달
[1, 2, 3].map((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
    return item;
})
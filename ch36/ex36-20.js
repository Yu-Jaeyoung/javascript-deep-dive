const todos = [
    {id: 1, content: 'HTML', complete: true},
    {id: 2, content: 'CSS', complete: false},
    {id: 3, content: 'JS', complete: false}
];

// todos 배열은 두 번째 요소인 객체로부터 id 프로퍼티만 추출
const [, {id}] = todos;
console.log(id);
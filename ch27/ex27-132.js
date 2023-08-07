const users = [
    {id: 1, name: "Lee"},
    {id: 2, name: "Kim"},
    {id: 3, name: "Choi"},
    {id: 4, name: "Park"},
];

console.log(users.findIndex(user => user.id === 2));

console.log(users.findIndex(user => user.name === "Park"));

function predicate(key, value) {
    // key와 value를 기억하는 클로저를 반환
    return item => item[key] === value;
}

console.log(users.findIndex(predicate('id', 2)));

console.log(users.findIndex(predicate('name', 'Park')));
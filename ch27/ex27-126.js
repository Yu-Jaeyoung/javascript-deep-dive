const products = [
    {id: 1, price: 100},
    {id: 2, price: 200},
    {id: 3, price: 300},
];

// 1 번째 순회시 acc는 {id: 1, price: 100}, cur은 {id: 2, price: 200}
// 2 번째 순회시 acc는 300, cur은 {id: 3, price: 300},
// 2 번째 순회시 acc에 함수에 객체가 아닌 숫자값이 전달
// 이때 acc.price는 udefined
const priceSum = products.reduce((acc, cur) => acc.price + cur.price);
console.log(priceSum);
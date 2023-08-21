// this가 subset의 상위 집합인지 확인
Set.prototype.isSuperset = function (subset) {
    const supersetArr = [...this];
    return [...subset].every(v => supersetArr.includes(v));
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA와 setB의 교집합
console.log(setA.isSuperset(setB));

// setB와 setA의 교집합
console.log(setB.isSuperset(setA));
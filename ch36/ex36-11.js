const user = {firstName: 'Jaeyoung', lastName: 'Yu'};

// ES6 객체 디스트럭처링 할당
// 변수 lastName, firstName을 선언하고 user 객체를 디스트럭처링하여 할당
// 이때, 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어짐. 순서는 의미 없음
const {lastName, firstName} = user;

console.log(firstName, lastName);
const user = {firstName: 'Jaeyoung', lastName: 'Yu'};

// 프로퍼티 키를 중심으로 디스트럭처링 할당이 이루어짐
// 프로퍼티 키가 lastName인 프로퍼티 값을 ln에 할당
// 프로퍼티 키가 firstName인 프로퍼티 값을 fn에 할당
const {lastName: ln, firstName: fn} = user;

console.log(fn, ln);
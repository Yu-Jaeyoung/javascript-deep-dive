var elem = null;

// elem이 null 또는 undefined이면 undefined를 반환
// 그렇지 않으면 우항의 프로퍼티 참조를 이어감
var value = elem?.value;
console.log(value); // undefined
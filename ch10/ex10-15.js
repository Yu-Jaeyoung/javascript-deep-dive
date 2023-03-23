var person = {
  "last-name": "Lee",
  1: 10,
};

// person.'last-name'; // SyntaxError: Unexpected string
// person.last-name; //  브라우저 환경 NaN, Node.js 환경: ReferenceError: name is not defined
// person-[last-name]; // ReferenceError: last is not defined
person["last-name"]; // Lee]


// 프로퍼티 키가 숫자로 이루어진 문자열인 경우 따옴표룰 생략할 수 있음
// person.1; // SyntaxError: Unexpected number
// person.'1'; // SyntaxError: Unexpected string
person[1] // 10 : person
person['i']; // 10
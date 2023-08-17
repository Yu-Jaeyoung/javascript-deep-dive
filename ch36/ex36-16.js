const {firstName = 'Jaeyoung', lastName} = {lastName: 'Yu'}
console.log(firstName, lastName);

const {firstName: fn = 'Jaeyoung', lastName: ln} = {lastName: 'Yu'};
console.log(fn, ln);
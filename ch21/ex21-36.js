// URI의 쿼리 스트링
const uriComp = "name=이응모&job=programmer&teacher";

// encodedURIComponent 함수는 인수로 전달받은 문자열을 URI의 구성요소인 쿼리 스트링의 일부로 간주
// 따라서 쿼리 스트링 구분자로 사용되는 =, ?, &까지 인코딩
let enc = encodeURIComponent(uriComp);
console.log(enc);

let dec = decodeURIComponent(enc);
console.log(dec);

// encodeURI 함수는 인수로 전달받은 문자열을 완전한 URI로 간주
// 따라서 쿼리 스트링 구분자로 사용되는 =,?,&를 인코딩하지 않음
enc = encodeURI(uriComp);
console.log(enc);

dec = decodeURI(enc)
console.log(dec);
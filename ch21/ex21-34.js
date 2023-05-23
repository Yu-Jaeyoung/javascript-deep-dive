// 완전한 URI
const uri = "http://example.com?name=이응모&job=programmer&teacher";

// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩함
const enc = encodeURI(uri);
console.log(enc);
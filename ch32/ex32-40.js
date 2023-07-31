// 인수로 전달받은 문자열을 역순으로 뒤집음
function reverseString(str){
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello world!'));
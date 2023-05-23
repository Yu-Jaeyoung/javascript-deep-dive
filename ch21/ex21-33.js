// 공백으로 구분된 문자열은 첫 번째 문자열만 반환
console.log(parseInt("34 45 66"));
console.log(parseInt("40 years"));

// 첫 번째 문자열을 숫자로 벼노한할 수 없다면 NaN을 반환
console.log(parseInt("He was 40"));

// 앞뒤 공백은 무시된다.
console.log(parseInt("60"));
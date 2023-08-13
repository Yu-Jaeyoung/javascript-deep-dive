// ES5
var arr1 = [1, 4];
var arr2 = [2, 3];

/*
apply 메서드의 2번째 인수(배열)은 apply 메서드가 호출한 splice 메서드의 인수 목록
apply 메서드의 2번째 인수 [1, 0].concat(arr2)는 [1, 0, 2, 3]으로 평가됨
따라서 splice 메서드에 apply 메서드의 2번째 인수 [1, 0, 2, 3]이 해체되어 전달됨
즉, arr1[1]부터 0개의 요소를 제거하고 그 자리(arr[1])에 새로운 요소 (2, 3)을 삽입
 */
Array.prototype.splice.apply(arr1, [1, 0].concat(arr2));
console.log(arr1);
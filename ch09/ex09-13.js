// 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환
function isFalsy(v) {
  return !v;
}

// 전달받은 인수가 Truthy 값이면 ture, Falsy 값이면 false를 반환
function isTruthy(v) {
  return !!v;
}

// 모두 true를 반환
isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy("");

// 모두 true를 반환
isTruthy(true);
isTruthy("0"); // 빈 문자열이 아닌 문자열은 Truthy 값
isTruthy({});
isTruthy([]);
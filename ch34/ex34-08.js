// 이터러블
const iterable = [1, 2, 3];

// 이터러블의 Symbol.iterator 메서드를 호출하여 이터레이터를 생성
const iterator = iterable[Symbol.iterator]();

for (; ;) {
  // 이터레이터의 next 메서드를 호출하여 이터러블을 순회
  // 이때 next 메서드는 이터레이터 리절트 객체를 반환
  const res = iterator.next();
  
  // next 메서드가 반환한 이터레이터 리절트 객체의 done 프로퍼티 값이 true이면 이터러블의 순회를 중단
  if (res.done) break;
  
  // 이터레이터 리절트 객체의 value 프로퍼티 값을 item 변수에 할당
  const item = res.value;
  console.log(item);
}
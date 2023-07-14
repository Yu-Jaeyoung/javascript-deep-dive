class Person {
  // 생산자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }

  // 정적 메서드
  static sayHo() {
    console.log("Ho!");
  }
}

// 정적 메서드는 클래스로 호출
// 정적 메서드는 인스턴스 없이도 호출할 수 있음
Person.sayHo();
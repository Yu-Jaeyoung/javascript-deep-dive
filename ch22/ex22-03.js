// 객체 리터럴
const circle = {
  radius: 5,
  getDiameter() {
    // this 메서드는 호출한 객체를 가리킴
    return 2 * this.radius;
  },
};

console.log(circle.getDiameter());
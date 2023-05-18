const circle = {
  radius: 5, // 반지름

  // 원의 지름 : 2r
  getDiameter() {
    return 2 * this.radius;
  },

  // 원의 둘레 : 2[pi]r
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },

  // 원의 넓이: [pi]rr
  getArea() {
    return Math.PI * this.radius ** 2;
  },
};

console.log(circle);

console.log(circle.getDiameter());
console.log(circle.getPerimeter());
console.log(circle.getArea());
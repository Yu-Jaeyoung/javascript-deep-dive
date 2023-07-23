const base = {
  name: 'Lee',
  sayHi() {
    return `Hi! ${this.name}`;
  },
};

const derived = {
  __proto__: base,
  // sayHi는 ES6 메서드가 아님
  // 따라서 sayHi는 [[HomeObject]]를 갖지 않으므로 super 키워드를 사용할 수 없음
  sayHi: function () {
    return `${super.sayHi()}, how are you doing?`;
  },
};

console.log(derived.sayHi());
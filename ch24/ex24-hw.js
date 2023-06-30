for (var i = 0; i < 100; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 100; i++) {
  function closure(input) {
    setTimeout(function () {
      console.log(input);
    }, 1000);
  }
  closure(i);
}

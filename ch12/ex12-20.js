function add(x, y) {
  console.log(arguments);
  // Argumnets(3) [2, 5, 10, callee: f, Symbol(Symbol.iterator): f]
  return x + y;
}

add(2, 5, 10);
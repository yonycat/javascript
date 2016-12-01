// 缺点：从 1 开始，然后看不出来后面传递了参数
function containsAll(haystack) {
  for (var i = 1; i < arguments.length; i++) {
    var needle = arguments[i];
    if (haystack.indexOf(needle) === -1) {
      return false;
    }
  }
  return true;
}

// 不定参数的情况
// ...needles代表不定参数
function containsAll2(haystack, ...needles) {
  for (var needle of needles) {
    if (haystack.indexOf(needle) === -1) {
      return false;
    }
  }
  return true;
}

// es6 可以使用默认参数简化工作量

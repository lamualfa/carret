'use strict';

module.exports = function equivalent(index, charset) {
  const length = charset.length;

  let result = '';

  while (index !== false) {
    let i;

    if (index >= length) {
      i = index % length;
      index = (index - i) / length;
    } else {
      i = index;
      index = false;
    }

    result = charset[i] + result;
  }

  return result;
};

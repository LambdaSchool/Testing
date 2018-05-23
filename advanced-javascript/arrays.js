/* eslint-disable no-unused-vars, max-len */
//1
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};//done

//2
const map = (elements, cb) => {
  const mappedArr = [];
  each(elements, (item) => {
    mappedArr.push(cb(item));
  });
  return mappedArr;
};//done

//3
const reduce = (elements, cb, memo = elements.shift()) => {
  each(elements, (item) => {
    memo = cb(memo, item);
  });
  return memo;
};//done

//4
const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) return elements[i];
  }
  return undefined;
};//done

//5
const filter = (elements, cb) => {
  const filteredValues = [];
  each(elements, item => {
    if (cb(item)) filteredValues.push(item);
  });
  return filteredValues;
};//done

//6
const flatten = (elements) => {
  const flattenedArr = reduce(
    elements,
    (memo, item) => {
      if (Array.isArray(item)) return memo.concat(flatten(item));
      return memo.concat(item);
    },
    []
  );
  return flattenedArr;
};//done

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};

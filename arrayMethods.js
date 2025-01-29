const mySlice = (arr, start = 0, end = arr.length) => {
  const result = [];

  if (arr.length === 0) return "Массив пустой";

  if (start < 0) start = arr.length + start;
  if (end < 0) end = arr.length + end;

  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }

  return result;
};

console.log(mySlice([1, 2, 3, 4, 5], -2));

const myIndexOf = (arr, item, from = 0) => {
  if (arr.length === 0) return "Массив пустой";
  if (!item) return "Введите элемент, который нужно найти";

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
};

console.log(
  myIndexOf(["чебурашка", "гена", "шапокляк", "лариска"], "чебурашка")
);

const myIncludes = (arr, item, from = 0) => {
  if (arr.length === 0) return "Массив пустой";
  if (!item) return "Введите элемент, который нужно найти";

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  return false;
};

console.log(
  myIncludes(["чебурашка", "гена", "шапокляк", "лариска"], "чебурашка")
);

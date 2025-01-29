const sumFieldNumbers = (obj) => {
  return Object.values(obj)
    .filter((item) => typeof item === "number")
    .reduce((acc, item) => acc + item, 0);
};

const myObj = {
  a: 10,
  b: "20",
  c: 30,
  d: true,
  e: [1, 2, 3],
  f: null,
};

console.log(sumFieldNumbers(myObj));

const arrayFieldNamesSorted = (obj) => {
  return Object.keys(obj)
    .filter((item) => typeof obj[item] === "number")
    .sort((a, b) => obj[b] - obj[a]);
};

const obj = { name: "Vasya", friends: 5, likes: 19, projects: 7 };

console.log(arrayFieldNamesSorted(obj));

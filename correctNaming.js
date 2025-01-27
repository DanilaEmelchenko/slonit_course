function getTheTotalAmount(arr) {
  let totalAmount = 0;
  arr.forEach((num) => {
    totalAmount += num;
  });
  return totalAmount;
}

let numbers = [10000, 20000, 30000];
console.log(getTheTotalAmount(numbers));

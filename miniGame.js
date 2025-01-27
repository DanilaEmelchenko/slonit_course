let max = 100;
let min = 1;

const computerOne = Math.floor(Math.random() * (max - min + 1) + min);

console.log(`Компьютер 1 загадал число: ${computerOne}`);
console.log();

while (true) {
  const computerTwo = Math.floor((max + min) / 2);

  if (computerOne === computerTwo) {
    console.log(`Компьютер 2: Пробую число ${computerTwo}.`);
    console.log(`Компьютер 1: Угадал!.`);
    break;
  } else if (computerOne > computerTwo) {
    console.log(`Компьютер 2: Пробую число ${computerTwo}.`);
    console.log(`Компьютер 1: Больше.`);
    min = computerTwo + 1;
  } else {
    console.log(`Компьютер 2: Пробую число ${computerTwo}.`);
    console.log(`Компьютер 1: Меньше.`);
    max = computerTwo - 1;
  }
}

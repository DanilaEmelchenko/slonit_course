// Напишите функцию createLogger(), которая должна возвращать объект с методами:
// log(message): сохраняет сообщение в массив.
// getLogs(): выводит все сохраненные сообщения.
// Массив с сообщениями должен быть доступен только внутри замыкания.
// Посторонние функции не должны иметь прямого доступа к этому массиву.

const createLogger = () => {
  let logs = [];

  return {
    log: (message) => logs.push(message),
    getLogs: () => logs,
  };
};

const logger = createLogger();

logger.log("Первое сообщение");
logger.log("Второе сообщение");

console.log(logger.getLogs());

// Напишите функцию `createRandomGenerator(min, max), которая возвращает новую функцию.
// Каждое время, когда возвращенная функция вызывается, она должна генерировать случайное число в пределах от min до max.
// Значения min и max должны сохраняться внутри замыкания, и быть недоступными извне.

const createRandomGenerator = (min, max) => {
  return function randomNumbers() {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
};

const getRandom = createRandomGenerator(1, 10);
console.log(getRandom());
console.log(getRandom());

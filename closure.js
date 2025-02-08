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

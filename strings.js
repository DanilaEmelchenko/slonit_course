// 1. Самое простое - это иногда мы исправляем за пользователем его ввод данных и хотим,
// чтобы наша строка начиналась с большой буквы, независимо от того, что ввел пользователь.
// Необходимо реализовать такую функцию.
const correctionUserDataEntry = (input) => {
  let result = null;

  while (true) {
    if (!input) input = String(prompt("Нужно ввести текст"));

    if (input) {
      result = input.charAt(0).toUpperCase() + input.slice(1);
      break;
    }
  }

  return result;
};

let input = String(prompt("Введите текст"));

alert(correctionUserDataEntry(input));

// 2. Часто в интерфейсах программ мы видим какую-то длинную строку, которая не помещается и обрезана через троеточие.
// Давайте напишем аналогичный метод.
// На вход получаем длинную или не очень строку и размер ограничения (например, то что у нас влезает 40 символов).
// На выходе возвращает, по необходимости укороченную строку, в конце которой стоит троеточие.
// Усложняем задание тем, что строка не должна обрезаться посредине слова.
// Обрезаем строку по пробелу или по символу знака препинания (,.!?:;)/

const stringClipping = (str) => {
  const maxlength = 40;

  if (str.length <= maxlength) return str;

  let clipped = str.slice(0, maxlength);
  let lastIndex = clipped.lastIndexOf(" ");
  const punctuation = [",", ".", "!", "?", ":", ";"];

  for (const sign of punctuation) {
    const index = clipped.lastIndexOf(sign);
    if (index > lastIndex) lastIndex = index;
  }

  if (lastIndex > 0) return clipped.slice(0, lastIndex) + "...";
};

console.log(stringClipping("В объятиях тишины, Душа танцует в свободе"));
console.log(
  stringClipping(
    "Это очень длинная строка, которая не должна обрезаться на середине слова"
  )
);

// 3. Небольшое практическое задание по работе с подстроками.
// Функция на вход получает 2 строки, а на выходе возвращает true/false в зависимости от того,
// является хотя бы одна из строк (не важно какая) подстрокой другой строки.
// Если да, то возвращается true. В противном случае - false.
const substringOfAnotherString = (str1, str2) => {
  return str1.includes(str2);
};

console.log(substringOfAnotherString("Hello, world!", "ema"));
console.log(substringOfAnotherString("Hello, world!", "ello"));

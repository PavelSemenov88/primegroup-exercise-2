/**
 * Описание: найти уникальное число в массиве чисел
 * Ожидаемый результат: findUniqNumber([ 1, 1, 1, 2, 1, 1 ]) => 2;
 * @param {Array<number>} arr - Array
 * @returns {Number}
 */
const findUniqNumber = arr => {
  return arr.find((e) => arr.indexOf(e) == arr.lastIndexOf(e));
}

module.exports = findUniqNumber;
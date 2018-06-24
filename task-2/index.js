/**
 * Проверяет состоят ли массивы arr1 и arr2 из одинакового
 * числа одних и тех же элементов
 *
 * @param {Number[]} arr1 - отсортированный по возрастанию
 *                          массив уникальных элементов
 * @param {Number[]} arr2 - массив произвольной длинны произвольных чисел
 * @returns {Boolean}
 */
function haveSameItems(arr1, arr2) {
  if (arr1.length === arr2.length) {
     return arr2.every (function (value) {
        return arr1.includes(value)
     }) && arr1.every (function (value) {
        return arr2.includes (value)
     });
  } else {
    return false;
  }
}

export default haveSameItems;

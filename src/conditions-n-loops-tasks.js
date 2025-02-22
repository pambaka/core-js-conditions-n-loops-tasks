/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }

  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let maxNumber = a;

  if (b > maxNumber) {
    maxNumber = b;
  }

  if (c > maxNumber) {
    maxNumber = c;
  }

  return maxNumber;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  ) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (
    a &&
    b &&
    c &&
    ((a === b && a + b > c) || (a === c && a + c > b) || (b === c && b + c > a))
  ) {
    return true;
  }

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const onesNum = num % 10;
  const tensNum = (num - onesNum) / 10;
  let romanNum = '';

  for (let i = 0; i < tensNum; i += 1) {
    romanNum += 'X';
  }

  if (onesNum === 4) {
    romanNum += 'IV';
    return romanNum;
  }

  if (onesNum === 9) {
    romanNum += 'IX';
    return romanNum;
  }

  const remainderOnesNumFives = onesNum % 5;
  const onesNumFives = (onesNum - remainderOnesNumFives) / 5;

  if (onesNumFives === 1) {
    romanNum += 'V';
  }

  for (let i = 0; i < remainderOnesNumFives; i += 1) {
    romanNum += 'I';
  }

  return romanNum;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let str = '';
  let word = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        word = 'zero';
        break;
      case '1':
        word = 'one';
        break;
      case '2':
        word = 'two';
        break;
      case '3':
        word = 'three';
        break;
      case '4':
        word = 'four';
        break;
      case '5':
        word = 'five';
        break;
      case '6':
        word = 'six';
        break;
      case '7':
        word = 'seven';
        break;
      case '8':
        word = 'eight';
        break;
      case '9':
        word = 'nine';
        break;
      case '.':
      case ',':
        word = 'point';
        break;
      case '-':
        word = 'minus';
        break;
      default:
        word = '';
    }

    if (i !== numberStr.length - 1) {
      str += `${word} `;
    } else {
      str += word;
    }
  }

  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let remainingNum = num;
  let remainder;

  while (remainingNum !== 0) {
    remainder = remainingNum % 10;

    if (remainder === digit) {
      return true;
    }

    remainingNum = (remainingNum - remainder) / 10;
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length - 1; i += 1) {
    const balanceElement = i;
    let leftSum = 0;
    let rightSum = 0;

    for (let l = 0; l < balanceElement; l += 1) {
      leftSum += arr[l];
    }

    for (let r = balanceElement + 1; r < arr.length; r += 1) {
      rightSum += arr[r];
    }

    if (leftSum === rightSum) {
      return balanceElement;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  arr.length = size;

  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
    arr[i].length = size;
  }

  let num = 1;
  let index = 0;

  while (index < size - index) {
    for (let x = index; x < size - index; x += 1) {
      arr[index][x] = num;
      num += 1;
    }

    index += 1;

    for (let y = index; y <= size - index; y += 1) {
      arr[y][size - index] = num;
      num += 1;
    }

    for (let x = size - 1 - index; x >= index - 1; x -= 1) {
      arr[size - index][x] = num;
      num += 1;
    }

    for (let y = size - 1 - index; y >= index; y -= 1) {
      arr[y][index - 1] = num;
      num += 1;
    }
  }

  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rotatedArr = matrix;
  const len = matrix.length;
  const values = [];

  for (let y = 0; y < len; y += 1) {
    values[y] = [];

    for (let x = 0; x < len; x += 1) {
      values[y][x] = matrix[y][x];
    }
  }

  for (let y = 0; y < len; y += 1) {
    for (let x = 0; x < len; x += 1) {
      if (x === y) {
        rotatedArr[y][len - 1 - x] = values[y][x];
      } else if (x + y === len - 1) {
        rotatedArr[len - 1 - y][x] = values[y][x];
      } else {
        rotatedArr[x][len - 1 - y] = values[y][x];
      }
    }
  }

  return rotatedArr;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sortedArr = arr;
  const len = arr.length;

  function quickSort(arrayToSort) {
    if (arrayToSort.length < 2) {
      return arrayToSort;
    }

    const pivot = arrayToSort[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arrayToSort.length; i += 1) {
      if (arrayToSort[i] <= pivot) {
        left[left.length] = arrayToSort[i];
      }
      if (arrayToSort[i] > pivot) {
        right[right.length] = arrayToSort[i];
      }
    }

    return [...quickSort(left), ...[pivot], ...quickSort(right)];
  }

  const values = quickSort(sortedArr);

  for (let i = 0; i < len; i += 1) {
    sortedArr[i] = values[i];
  }

  return sortedArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let currentStr = str;
  let previousStr = '';
  let oddStr = '';
  let evenStr = '';
  const cash = {};
  let cashStep = 0;

  for (let j = 0; j < iterations; j += 1) {
    previousStr = currentStr;
    currentStr = '';
    oddStr = '';
    evenStr = '';

    if (cashStep) {
      currentStr = cash[j % cashStep];
    } else {
      for (let i = 0; i < previousStr.length; i += 1) {
        if (i % 2 === 0) {
          evenStr += previousStr[i];
        }
        if (i % 2 === 1) {
          oddStr += previousStr[i];
        }
      }
      currentStr = evenStr + oddStr;
      cash[j] = currentStr;
    }

    if (!cashStep && currentStr === str) {
      cashStep = j + 1;
    }
  }
  return currentStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */

// number => [arr] = [head arr | tail arr]

function getNearestBigger(number) {
  const arr = [];
  let remainder;
  let remainingNum = number;

  while (remainingNum !== 0) {
    remainder = remainingNum % 10;
    arr.unshift(remainder);
    remainingNum = (remainingNum - remainder) / 10;
  }

  let index = arr.length - 1;

  while (arr[index] <= arr[index - 1] && index > 0) {
    index -= 1;
  }
  if (index === 0) {
    return number;
  }
  const tailFirstIndex = index;

  function sliceArray(array, startIndex, endIndex) {
    const slicedArr = [];
    for (let i = startIndex; i < endIndex; i += 1) {
      slicedArr.push(array[i]);
    }
    return slicedArr;
  }

  const headArr = sliceArray(arr, 0, tailFirstIndex);
  const tailArr = sliceArray(arr, tailFirstIndex, arr.length);

  const headLastIndex = tailFirstIndex - 1;
  const headNumToSwap = arr[headLastIndex];

  let tailNumToSwapIndex = 0;
  const tailNumToSwap = tailArr[tailNumToSwapIndex];

  for (let i = 1; i < tailArr.length; i += 1) {
    if (tailArr[i] > headNumToSwap && tailArr[i] < tailNumToSwap) {
      tailNumToSwapIndex = i;
    }
  }

  [headArr[headLastIndex], tailArr[tailNumToSwapIndex]] = [
    tailArr[tailNumToSwapIndex],
    headArr[headLastIndex],
  ];

  tailArr.sort((a, b) => a - b);

  const newArr = headArr;
  const tailLength = tailArr.length;

  for (let i = 0; i < tailLength; i += 1) {
    newArr.push(tailArr.shift());
  }

  let biggerNum = '';
  const newArrLength = newArr.length;

  for (let i = 0; i < newArrLength; i += 1) {
    biggerNum += newArr.shift();
  }

  biggerNum = +biggerNum;

  return biggerNum;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};

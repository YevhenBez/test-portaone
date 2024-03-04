import arrayNumbers from '../../path/to/10m.json';
import css from '../solution/css/solution.module.css';

const Solution = () => {
  const maxNumber = arrayNumbers.reduce(
    (max, current) => Math.max(max, current),
    -Infinity
    );
    
  const minNumber = arrayNumbers.reduce((min, current) => Math.min(min, current), Infinity);
    
function quickselectMedian(arr) {
  const length = arr.length;
  // Якщо масив має парну кількість елементів
  if (length % 2 === 0) {
    return 0.5 * (quickselect(arr, length / 2 - 1) + quickselect(arr, length / 2));
  }
  // Якщо масив має непарну кількість елементів
  return quickselect(arr, length / 2);
}

function quickselect(arr, k) {
  if (arr.length === 1) return arr[0];
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return k < left.length
    ? quickselect(left, k)
    : k > left.length
    ? quickselect(right, k - left.length - 1)
    : pivot;
}

    const median = quickselectMedian(arrayNumbers);

    const sum = arrayNumbers.reduce((a, b) => a + b, 0);
    const avg = sum / arrayNumbers.length;
    
    function findLongestIncreasingSequence(array) {
  let longestSequence = [];
  let currentSequence = [];

  for (let i = 0; i < array.length; i++) {
    if (currentSequence.length === 0 || array[i] > currentSequence[currentSequence.length - 1]) {
      currentSequence.push(array[i]);
      if (currentSequence.length > longestSequence.length) {
        longestSequence = [...currentSequence];
      }
    } else {
      currentSequence = [array[i]];
    }
        }
        
        
        return longestSequence;
    }
    
    const longestIncreasingSequence = findLongestIncreasingSequence(arrayNumbers);

    const longestIncreasingSequenceString = longestIncreasingSequence.join(', ');


  return (
    <div className={css.solutionContainer}>
      <table className={css.solutionContainer__table}>
        <thead>
          <tr className={css.solutionContainer__table__tr}>
            <th className={css.solutionContainer__table__tr__th}>
              максимальне число
            </th>
            <th className={css.solutionContainer__table__tr__th}>
              мінімальне число
            </th>
            <th className={css.solutionContainer__table__tr__th}>медіана</th>
            <th className={css.solutionContainer__table__tr__th}>
              середнє арифметичне значення
            </th>
            <th className={css.solutionContainer__table__tr__th}>
              найбільша послідовність чисел (які ідуть один за одним), яка
              збільшується
            </th>
            <th className={css.solutionContainer__table__tr__th}>
              найбільша послідовність чисел (які ідуть один за одним), яка
              зменьшується
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className={css.solutionContainer__table__td}>{maxNumber}</td>
            <td className={css.solutionContainer__table__td}>
              {minNumber}
            </td>
                      <td className={css.solutionContainer__table__td}>{median}</td>
            <td className={css.solutionContainer__table__td}>
              {avg}
            </td>
            <td className={css.solutionContainer__table__td}>
              {longestIncreasingSequenceString}
            </td>
            <td className={css.solutionContainer__table__td}>
              найбільша послідовність чисел (які ідуть один за одним), яка
              зменьшується
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Solution;

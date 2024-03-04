import arrayNumbers from '../../path/to/10m.json';
import css from '../solution/css/solution.module.css';

const Solution = () => {
  const maxNumber = arrayNumbers.reduce(
    (max, current) => Math.max(max, current),
    -Infinity
    );
    
  const minNumber = arrayNumbers.reduce((min, current) => Math.min(min, current), Infinity);


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
            <td className={css.solutionContainer__table__td}>медіана</td>
            <td className={css.solutionContainer__table__td}>
              середнє арифметичне значення
            </td>
            <td className={css.solutionContainer__table__td}>
              найбільша послідовність чисел (які ідуть один за одним), яка
              збільшується
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

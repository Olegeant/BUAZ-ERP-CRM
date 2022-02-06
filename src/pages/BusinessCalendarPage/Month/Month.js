import styles from './Month.module.scss';

export default function Month({ month }) {
  return (
    <table className={styles.Month}>
      <caption className={styles.MonthName}>
        <a className={styles.MonthLink}>{month.fullName}</a>
      </caption>
      <thead>
        <tr className={styles.WeekCW}>
          <th>10</th>
          <th>10</th>
          <th>10</th>
          <th>10</th>
          <th>10</th>
          <th>10</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.WeekDay}>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
        </tr>
        <tr className={styles.WeekDay}>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
        </tr>
        <tr className={styles.WeekDay}>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
        </tr>
        <tr className={styles.WeekDay}>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
        </tr>
        <tr className={styles.WeekDay}>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
        </tr>
        <tr className={[styles.WeekDay, styles.Saturday].join` `}>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
        </tr>
        <tr className={[styles.WeekDay, styles.Sunday].join` `}>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
        </tr>
      </tbody>
    </table>
  );
}

import { useEffect, useState } from 'react';

import Year from '../../services/calendar/year';
import Calendar from '../../services/calendar/calendar';

import Month from './Month';

import styles from './BusinessCalendarPage.module.scss';

export default function BusinessCalendarPage() {
  const [year, setYear] = useState(() => new Year(Calendar.getCurrentYear));

  useEffect(() => {
    console.log(year);
  }, []);

  const { months } = year;

  return (
    <>
      <h1 className={styles.pageTitle}>BusinessCalendarPage</h1>
      <ul className={styles.calendarGrid}>
        {months.map(month => (
          <li className={styles.monthItem} key={month.shortName}>
            <Month month={month} />
          </li>
        ))}
      </ul>
    </>
  );
}

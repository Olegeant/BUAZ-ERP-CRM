import MenuButton from './MenuButton/MenuButton';

import styles from './NavMenu.module.scss';

export default function NavMenu() {
  return (
    <nav className={styles.NavMenu}>
      <ul className={styles.NavMenuList}>
        <li className={styles.NavMenuItem}>
          <MenuButton to="time/business-calendar">Business calendar</MenuButton>
        </li>

        <li className={styles.NavMenuItem}>
          <MenuButton to="time/year-calendar">Calendar</MenuButton>
        </li>
      </ul>
    </nav>
  );
}

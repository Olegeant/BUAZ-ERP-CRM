import { NavLink } from 'react-router-dom';
import styles from './MenuButton.module.scss';

export default function MenuButton({ children }) {
  <NavLink className={styles.MenuLink}>
    <div className={styles.MenuButton}>{children}</div>
  </NavLink>;
}

import { NavLink } from 'react-router-dom';

import styles from './MenuButton.module.scss';

export default function MenuButton({ children, to, ...props }) {
  return (
    <NavLink className={styles.MenuButton} to={to} {...props}>
      {children}
    </NavLink>
  );
}

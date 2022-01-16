import styles from './Header.module.scss';

export default function Header({ children }) {
  return <header className={styles.Header}>{children}</header>;
}

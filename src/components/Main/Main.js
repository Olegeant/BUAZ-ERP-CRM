import Container from '../Container';

import styles from './Main.module.scss';

export default function Main({ children }) {
  return (
    <main className={styles.Main}>
      <Container>{children}</Container>
    </main>
  );
}

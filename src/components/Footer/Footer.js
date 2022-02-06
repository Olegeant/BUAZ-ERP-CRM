import Container from '../Container';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <Container>
        <p className={styles.copyright}>
          Copyright &copy; by&nbsp;
          <a href="https://github.com/Olegeant" className={styles.krokodil}>
            Krokodil
          </a>
          . All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

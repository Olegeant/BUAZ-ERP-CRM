import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <p className={styles.copyright}>
        Copyright &copy; by&nbsp;
        <a href="https://github.com/Olegeant" class={styles.krokodil}>
          Krokodil
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}

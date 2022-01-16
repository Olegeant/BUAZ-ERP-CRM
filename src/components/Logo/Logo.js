import styles from './Logo.module.scss';
import bosalLogo from '../../assets/images/logo-bosal.png';

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <img className={styles.bosalLogo} src={bosalLogo} alt="Bosal UA logo" />
    </div>
  );
}

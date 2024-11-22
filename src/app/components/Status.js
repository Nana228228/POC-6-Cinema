import styles from '../page.module.css';

export default function Legend() {
  return (
    <div className={styles.legend}>
        <div className={styles.legendItem}>
        <span className={`${styles.circle} ${styles.indisponivel}`}></span>
        Indisponível
      </div>
      <div className={styles.legendItem}>
        <span className={`${styles.circle} ${styles.livre}`}></span>
        Disponivel
      </div>
      <div className={styles.legendItem}>
        <span className={`${styles.circle} ${styles.selecionado}`}></span>
        Selecionado
      </div>
    </div>
  );
}
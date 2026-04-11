import styles from "./Skeleton.module.css"

export default function Skeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar} />
        <div className={styles.titleLines}>
          <div className={`${styles.line} ${styles.lineFull}`} />
          <div className={`${styles.line} ${styles.lineThreeQuarter}`} />
        </div>
      </div>

      <div className={styles.body}>
        <div className={`${styles.line} ${styles.lineFull}`} />
        <div className={`${styles.line} ${styles.lineFull}`} />
        <div className={`${styles.line} ${styles.lineHalf}`} />
      </div>
    </div>
  )
}

import Swatch from "../Swatch/Swatch";
import styles from "./NewSeptuplet.module.css";

export default function NewSeptuplet({ onClick }: { onClick: any }) {
  return (
    <div className={styles.NewSeptuplet} onClick={onClick}>
      <div className={styles.Placeholder} />
      <div className={styles.Placeholder} />
      <div className={styles.Placeholder} />
      <div className={styles.Placeholder}>+</div>
      <div className={styles.Placeholder} />
      <div className={styles.Placeholder} />
      <div className={styles.Placeholder} />
      <button>New</button>
    </div>
  );
}

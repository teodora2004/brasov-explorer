import Navi from "@/components/navi";
import styles from "@/styles/styles.module.scss";

export default function Home() {
  return (
    <main>
      <Navi />

      <div className={styles.container}>
        <div className={styles.left}><span>left</span></div>
        <div className={styles.right}><span>right</span></div>
      </div>
    </main>
  );
}

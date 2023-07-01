import { BACKGROUND } from "../../utils/images";
import styles from "../../styles/Home.module.scss";
import { Link } from "react-router-dom";

export default function Home() {




  return (
    <main className={styles.home}>
      <img src={BACKGROUND} alt="background" />
      <h1 className={styles.title}>Encuentre a los mejores especialistas</h1>
      <Link to="/dentistas" className={styles.btn}>Buscar dentistas</Link>
    </main>
  );

}
import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.scss";
import useWindowSize from "../../hooks/useResponsive";
import { navBar } from "../../utils/navBar";
import { LOGO_MAIN, LOGO_SMALL } from "../../utils/images";
import ThemeMode from "./ThemeMode";

export default function Header() {
  const { width } = useWindowSize();

  const isSmall = width < 1024;
  const ismobile = width > 500;

  return (
    <main className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img
          src={`${isSmall ? LOGO_SMALL : LOGO_MAIN}`}
          alt="logo"
          height={50}
        />
      </Link>
      {
        ismobile &&
        <nav className={styles.nav}>
        {navBar.map((item) => (
          <Link key={item.name} to={item.path} className={styles.link}>{item.name}</Link>
        ))}
      </nav>
      }

      <ThemeMode />
    </main>
  );
}

import { URL } from "../../utils/fetch";
import { useState, useEffect } from "react";
import styles from "../../styles/Dentistas.module.scss";
import Card from "./Card";
import { PERFIL } from "../../utils/images";

export default function Dentistas() {
  const [dentistas, setDentistas] = useState<[]>();


  const getDentistas = async () => {
    const response = await fetch(`${URL}`);
    const data = await response.json();
    setDentistas(data);
  };

  useEffect(() => {
    getDentistas();
  }, []);

  

  if (!dentistas) {
    return <p>Cargando...</p>;
  }

  return (
    <main className={styles.dentistas}>
      <h1 className={styles.title}>Dentistas</h1>
      <section className={styles.dentistasGroup}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {dentistas.map((dentista: any) => (
          <Card
            key={dentista.id}
            image={PERFIL}
            id={dentista.id}
            name={dentista.name}
            email={dentista.email}
          />
        ))}
      </section>
    </main>
  );
}

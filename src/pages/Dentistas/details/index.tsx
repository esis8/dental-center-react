import { URL } from "../../../utils/fetch";
import { useState, useEffect } from "react";
import styles from "../../../styles/Dentistas.module.scss";
import { useParams } from "react-router-dom";
import { PERFIL } from "../../../utils/images";
import { IUserDetail } from "../../../types/Card";

export default function Details() {
  const [detail, setDetail] = useState<IUserDetail>();

  const { id } = useParams();

  const getDetails = async () => {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    setDetail(data);
  };

  useEffect(() => {
    getDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!detail) {
    return <p>Cargando...</p>;
  }

  return (
    <main className={styles.dentistas}>
      <h1 className={styles.title}>Dentistas</h1>
      <section className={styles.dentistasGroup}>
        <div className={styles.dentista}>
          <img src={PERFIL} alt={detail.name} className={styles.image} />
          <h2 className={styles.name}>{detail.name}</h2>
          <p className={styles.content}>{detail.email}</p>
          <p className={styles.content}>{detail.username}</p>
          <p className={styles.content}>{detail.phone}</p>
            <button className={styles.btn}>FAV</button>
        </div>
      </section>
    </main>
  );
}

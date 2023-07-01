import { useNavigate } from "react-router-dom";
import styles from "../../styles/Dentistas.module.scss"
import { FavoriteItem, IUser } from "../../types/Card";
import {  useState } from "react";





export default function Card(props: IUser) {

  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const handleClickCard = () => {
    navigate(`/dentistas/${props.id}`)

  }

  const handleFav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const FavoriteItem: FavoriteItem = {
      id: props.id,
      name: props.name,
      email: props.email,
    }

    addFavs(FavoriteItem)

}

const addFavs = (dentista: FavoriteItem)=>{
  const newFavs = [...favorites, dentista];
  setFavorites(newFavs);
  localStorage.setItem("favorites", JSON.stringify(newFavs));
}
  


  return (
    <div className={styles.dentista} onClick={handleClickCard}>
      <img src={props.image} alt={props.name} className={styles.image}/>
      <h2 className={styles.name}>{props.name}</h2>
      <p className={styles.content}>{props.email}</p>
        <button className={styles.btn} onClick={handleFav}>FAV</button>
    </div>
  );
}

import { useState } from "react";
import styles from "../../styles/Contacto.module.scss"


export default function Contacto() {


  const [formData, setFormData] = useState({
    name: '',
    apellido: '',
    email: '',
    telefono: '',
  })

  const [invalidInput, setInvalidInput] = useState(false)

  const [formSuccess, setFormSuccess] = useState(false)



  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!isValidName(formData.name) || !isValidEmail(formData.email)) {
      setInvalidInput(true)
    
    } else {
      setFormSuccess(true) 
        setFormData({
              name: '',
              apellido: '',
              email: '',
              telefono: '',
        })

    }

  }


  const isValidName = (value:string) => {
    const regex = /^(?! )[a-zA-Z0-9 ]{3,16}$/;
    return regex.test(value);
  }

  const isValidEmail = (value:string) => {
    const regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return regex.test(value);
  }


  return (
    <div className={styles.contacto}>
      <h1 className={styles.title}>Por favor deje sus Dajos para ser contactado por nuestros especialistas</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          <span>
            Name:
          </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            id="name"
            placeholder="Ingrese su Nombre"
          />
        </label>
        <label htmlFor="apellido" className={styles.label}>
          <span>
            Apellido:
          </span>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleInputChange}
            id="apellido"
            placeholder="Ingrese su Apellido"
          />
        </label>
        <label htmlFor="email" className={styles.label}>
          <span>
            email:
          </span>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            id="email"
            placeholder="Ingrese su email"
          />
        </label>
        <label htmlFor="telefono" className={styles.label}>
          <span>
            Telefono:
          </span>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            id="telefono"
            placeholder="Numero de telefono"
          />
        </label>
        {
          (formData.name && formData.email) ? <button type="submit" className={`${styles.btn} ${styles.active}`}>Enviar</button> : <button type="submit" disabled className={styles.btn}>Complete los Datos</button>
        }
      </form>
      {invalidInput && 
        <div className={styles.error}>
          <p className={styles.text}>Los datos ingresados son invalidos</p>
          <button onClick={() => setInvalidInput(false)} className={styles.btn2}>Cerrar</button>
        </div>
        
      }

      {
        formSuccess && <div className={styles.success}>Muchas Gracias, un representante lo estara contactando a su mail</div>
      }

    </div>
  );

}
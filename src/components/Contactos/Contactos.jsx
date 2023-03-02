import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import classes from "./Contactos.module.css";
import { async } from "@firebase/util";

function Contactos() {
  //console.log(import.meta.env.VITE_BACKEND_HOLA)
  //console.log(import.meta.env.DB_PASSWORD)

  const [users, setuser] = useState([])
  const useCollectionRef = collection(db, 'reservas-rest')
  const [id, setId] = useState("")
  const [nombre, setName] = useState("")
  const [email, setEmail] = useState("")
  const [asunto, setAsunto] = useState("")
  const [mensaje, setMensaje] = useState("")

  const createUser = async (e) => {
    e.preventDefault()
    let d = { Asunto: asunto, Email: email, Mensaje: mensaje, Nombre: nombre };
    if (id == "") {
      try {
        await addDoc(useCollectionRef, d);
      } catch (err) {
        alert(err);
      };
    }
    else {
      const userDocRef = doc(db, 'reservas-rest', id);
      try {
        await updateDoc(userDocRef, d);
      } catch (err) {
        alert(err);
      }
    }
    await getUsers();
  }

  const getUsers = async () => {
    setId("");
    const data = await getDocs(useCollectionRef);
    setuser(data.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    })))
  }

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (userId) => {
    if (window.confirm('Estas seguro de eliminar esta fila?')) {
      const userDocRef = doc(db, 'reservas-rest', userId);
      try {
        await deleteDoc(userDocRef);
      } catch (err) {
        alert(err);
      };
      await getUsers();
    }
  }

  const editUser = async (user) => {
    setId(user.id);
    document.getElementById('Nombre').value = user.data.Nombre;
    document.getElementById('Email').value = user.data.Email;
    document.getElementById('Asunto').value = user.data.Asunto;
    document.getElementById('Mensaje').value = user.data.Mensaje;
  }

  return (
    <>
      <div className={classes.contact}>
        <h1 className={classes.contact}>Contactos</h1>
        <div className={classes.contact_title}>
          <form action="" className={classes.contact_wraper}>
            <div className={classes.contact_inputline}>
              <label htmlFor="name" className={classes.contact_label}>Nombre</label>
              <br />
              <input id="Nombre" type="text" placeholder="Nombre" onChange={(e) => { setName(e.target.value) }} className={classes.contact_input} />
            </div>
            <div className={classes.contact_inputline}>
              <label htmlFor="email" className={classes.contact_label}>Email</label>
              <br />
              <input id="Email" type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} className={classes.contact_input} />
            </div>
            <div className={classes.contact_inputline}>
              <label htmlFor="subject" className={classes.contact_label}>Asunto</label>
              <br />
              <input id="Asunto" type="text" placeholder="Asunto" onChange={(e) => { setAsunto(e.target.value) }} className={classes.contact_input} />
            </div>
            <div className={classes.contact_inputline}>
              <label htmlFor="message" className={classes.contact_label}>Mensaje</label>
              <br />
              <input id="Mensaje" type="text" placeholder="Mensaje" onChange={(e) => { setMensaje(e.target.value) }} className={classes.contact_input} />
            </div>
            <button onClick={createUser} className={classes.contact_submitbutton}>Enviar</button>
          </form>
        </div>
      </div>
      <div className={classes.center_div}>
      <table className={classes.tabla_users}>
        <thead>
          <tr>
            <th>
              <h1>Nombre</h1>
            </th>
            <th>
              <h1>Email</h1>
            </th>
            <th>
              <h1>Asunto</h1>
            </th>
            <th>
              <h1>Mensaje</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  {item.data.Nombre}
                </td>
                <td>
                  {item.data.Email}
                </td>
                <td>
                  {item.data.Asunto}
                </td>
                <td>
                  {item.data.Mensaje}
                </td>
                <td>
                  <button className={classes.botonedit} onClick={() => editUser(item)}>Editar</button>
                  <button className={classes.botonedit} onClick={() => deleteUser(item.id)}>Eliminar</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Contactos;
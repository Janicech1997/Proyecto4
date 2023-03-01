import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import classes from "./Contactos.module.css"

function Contactos(){
  //console.log(import.meta.env.VITE_BACKEND_HOLA)
  //console.log(import.meta.env.DB_PASSWORD)

const [ users,setuser]= useState([])
const useCollectionRef= collection(db,'reservas-rest')
 const [name, setName]= useState("")
 const [email, setEmail]= useState("")
 const [asunto, setAsunto]= useState("")
 const [mensaje, setMensaje]= useState("")

 const createUser = async() => { 
  await addDoc(useCollectionRef, {nombre: name, email: email, asunto: asunto, mensaje: mensaje})
  getUsers()
 }

 const getUsers = async() =>{
  const data = await getDocs(useCollectionRef)
  console.log(data)
  setuser(data.docs.map((doc) =>({...doc.data(), id: doc.id})))
 }

 useEffect(()=>{
  getUsers();
 },[]);

  return (
    <>
    <div className={classes.contact}>
    <h1 className={classes.contact}>Contactos</h1>
    <div className={classes.contact_title}>
        <form action="" className={classes.contact_wraper}>
      <div className={classes.contact_inputline}>
        <label htmlFor="name" className={classes.contact_label}>Nombre</label>
        <br />
        <input type="text" placeholder="Nombre"onChange={(e) =>{setName(e.target.value)}} className={classes.contact_input} />
      </div>
      <div className={classes.contact_inputline}>
        <label htmlFor="email" className={classes.contact_label}>Email</label>
        <br />
        <input type="text" placeholder="Email"onChange={(e) =>{setEmail(e.target.value)}} className={classes.contact_input} />
      </div>
      <div className={classes.contact_inputline}>
        <label htmlFor="subject" className={classes.contact_label}>Asunto</label>
        <br />
        <input type="text" placeholder="Asunto"onChange={(e) =>{setAsunto(e.target.value)}} className={classes.contact_input} />
      </div>
      <div className={classes.contact_inputline}>
        <label htmlFor="message" className={classes.contact_label}>Mensaje</label>
        <br />
        <input type="text" placeholder="Mensaje"onChange={(e) =>{setMensaje(e.target.value)}} className={classes.contact_input} />
      </div>
      <button onClick={createUser} className={classes.contact_submitbutton}>Enviar</button> 
    </form>
    </div>
    </div>

    {users.map((item)=>{
      return(
        <table>
        <div key={item.id}>
          <h1>Nombre: {item.nombre} </h1>
          <h1>Email: {item.email} </h1>
          <h1>Asunto: {item.asunto} </h1>
          <h1>Mesa: {item.mesa} </h1>
        </div>
        </table>
      )
    })}
    </>

  );
};

export default Contactos;

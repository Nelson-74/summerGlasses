import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore } from 'firebase/firestore';
import {Link} from 'react-router-dom'

function Categories ()  {

    const [categorias, setCategorias] = useState([]);

    useEffect(()=> {
        const db = getFirestore();
        const categoriesCollection = collection(db, 'categories');

        getDocs(categoriesCollection)
        .then((snapshot) => {
            setCategorias(snapshot.docs.map((doc) => doc.data().title));
        });
    }, []);

  return (
    <>
      {categorias.map ((categoria) => (
        
        <Link  key = {categoria} to= {'/categoria/' + categoria } className="nav-link" >
            {categoria}
        </Link>
      
      ))}
    </>
  )
}

export default Categories

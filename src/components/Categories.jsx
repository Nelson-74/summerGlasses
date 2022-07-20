import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore } from 'firebase/firestore';
import {Link} from 'react-router-dom'

function Categories ()  {

    const [category, setCategory] = useState([]);

    useEffect(()=> {
        const db = getFirestore();
        const categoriesCollection = collection(db, 'categories');

        getDocs(categoriesCollection)
        .then((snapshot) => {
            setCategory(snapshot.docs.map((doc) => doc.data().name));
        });
    }, []);

  return (
    <>
    <li className="nav-item">
    {category.map ((el) => (
        
        <Link  key = {el} to= {'/category/' + el } className="nav-link" >
            {el.charAt(0).toUpperCase() + el.slice(1)}
        </Link>
      
      ))}
    </li>
      
    </>
  )
}

export default Categories

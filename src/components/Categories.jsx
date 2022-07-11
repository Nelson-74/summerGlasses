import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore } from 'firebase/firestore';
import {Link} from 'react-router-dom'

function Categories ()  {

    const [category, setCategory] = useState([]);

    useEffect(()=> {
        const db = getFirestore();

        const categoriesCollection = collection(db, 'categories');

        getDocs(categoriesCollection).then((snapshot) => {
            setCategory(snapshot.docs.map((doc) => doc.data().category));
        });
    }, []);

  return (
    <>
      {category.map ((el) => (
        <li className="nav-item">
        <Link to={'/category' + el} className="nav-link" >
            {el}
        </Link>
      </li>
      ))}
    </>
  )
}

export default Categories

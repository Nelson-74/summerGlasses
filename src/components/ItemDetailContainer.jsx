import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {doc, getDoc, getFirestore} from 'firebase/firestore';


function ItemDetailContainer () {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState({});
    const {id} = useParams();
    

    useEffect(() =>{
        
       const db = getFirestore(); 
       const itemRef = doc(db, 'items', id);

       getDoc(itemRef)

       .then((snapshot) => {
        setLoading (false);
        setItem({ ...snapshot.data(), id: snapshot.id})
       })
       .catch((error) => {
        setError(error);
       })
       .finally(() => {
        setLoading(false);
       });    
   
    },[id])

    

    return (
        <>
           <div className=" d-flex justify-content-center">
            {loading && <h3>Loading...</h3>}
           </div>
           <div>{error && 'No se pueden cargar los productos '}</div>
           <ItemDetail item = {item} />
            
        </>
    )
};

export default ItemDetailContainer

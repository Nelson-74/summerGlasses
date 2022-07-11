import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {doc, getDoc, getFirestore} from 'firebase/firestore';


function ItemDetailContainer () {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [result, setResult] = useState([]);
    const {id} = useParams();

    useEffect(() =>{
       const db = getFirestore();
        
       const itemRef = doc(db, 'items', id);

       getDoc(itemRef).then((snapshot) => {
        setResult({ ...snapshot.data(), id: snapshot.id});
       })
       .catch((error) => {
        setError(error);
       })
       .finally(() => {
        setLoading(false);
       });    
    },[id]);

    

    return (
        <>
           <div className=" d-flex justify-content-center">
            {loading && <h3>Cargando...</h3>}
           </div>
           <div>{error && 'Load error '}</div>
           <div className=" d-flex justify-content-center p-3">{result && <ItemDetail items ={result} />}</div>
            
        </>
    )
};

export default ItemDetailContainer

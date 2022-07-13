import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {doc, getDoc, getFirestore} from 'firebase/firestore';


function ItemDetailContainer () {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [product, setProduct] = useState();
    const {id} = useParams();
    const db = getFirestore();

    useEffect(() =>{
       
       
       const itemRef = doc(db, 'items', id);

       getDoc(itemRef).then((snapshot) => {
        setProduct({ ...snapshot.data(), id: snapshot.id});
       })
       .catch((error) => {
        setError(error);
       })
       .finally(() => {
        setLoading(false);
       });    
    },[db,id]);

    

    return (
        <>
           <div className=" d-flex justify-content-center">
            {loading && <h3>Cargando...</h3>}
           </div>
           <div>{error && 'Load error '}</div>
           <div className=" d-flex justify-content-center p-3">{product && <ItemDetail items = {product} />}</div>
            
        </>
    )
};

export default ItemDetailContainer

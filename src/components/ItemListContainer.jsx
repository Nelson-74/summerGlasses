import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
// import {  } from '../asyncMock';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

const ItemListContainer = (props) => {
   
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [result, setResult] = useState([]);
    //Este id proviene de la url
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, 'items');

        if (id) {
            const q = query(itemsCollection, where ('category', '==', id));

            getDocs(q).then(snapshot =>{
                setResult(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
             })
             .catch((error) => {
                setError(error);
             })
             .finally(() => {
                setLoading(false);
             });
        }else {getDocs(itemsCollection).then(snapshot =>{
            setResult(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
         })
         .catch((error) => {
            setError(error);
         })
         .finally(() => {
            setLoading(false);
         });


        }
              
    },[id]);
         

        
        return (
            <>
            
            <div className=" d-flex justify-content-center">
                {loading && <h3>Cargando...</h3>}
            </div>
            <div>{error && 'Load error '}</div>
            <div className=" d-flex justify-content-center p-3">     
                {result && <ItemList products={result} />}                
            </div>  
            </>
            )  
};

export default ItemListContainer

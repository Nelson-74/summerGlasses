/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

function ItemListContainer() {

   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
   const [products, setProducts] = useState([]);
   //Este id proviene de la url
   const { id } = useParams();

   useEffect(() => {
      const db = getFirestore();

      const itemsCollection = collection(db, 'items');

      if (id) {
         const q = query(itemsCollection, where('category', '==', id));

         getDocs(q).then(snapshot => {
            setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
         })
            .catch((error) => {
               setError(error);
            })
            .finally(() => {
               setLoading(false);
            });
      } else {
         getDocs(itemsCollection).then(snapshot => {
            setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
         })
         .catch((error) => {
            setError(error);
         })
         .finally(() => {
            setLoading(false);
         });


      }

   }, [id]);



   return (
      <>
      
      <div className='navbar'>
      <ItemList products={products} error={error} loading={loading} />
      </div>
      
      </>
   );
}

export default ItemListContainer

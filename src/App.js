import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
// import Inicio from './paginas/Inicio';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
//import ItemCount from './components/ItemCount';
import {BrowserRouter, Routes,Route} from 'react-router-dom';


function App() {
  // const onAdd =(count) =>{
  //   alert(`Agregaste ${count} productos a tu carrito`);
  // }
  return (
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemListContainer/>}/>
        <Route path='/category/Lentes de sol' element={<ItemListContainer category={'Lentes de sol'}/>}/>
        <Route path='/category/Lentes sport' element={<ItemListContainer category={'Lentes sport'}/> }/>
        <Route path='/category/Lentes de lectura' element={<ItemListContainer category={'Lentes de lectura'}/> }/>
        <Route path='/category/Lentes de contacto' element={<ItemListContainer category={'Lentes de contacto'}/> }/>
        <Route path='/category/Limpieza de lentes' element={<ItemListContainer category={'Limpieza de lentes'}/> }/>
      
      </Routes>
      </BrowserRouter>
      
  );
}

export default App;

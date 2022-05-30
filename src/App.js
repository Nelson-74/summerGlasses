import './App.css';
import React from 'react'
import NavBar from './components/NavBar';

// import Inicio from './paginas/Inicio';
// import Lentes from './paginas/Lentes';
// import Contactos from './paginas/Contactos';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
      <>
      <NavBar/>
      <ItemListContainer greeting={'Hola envío el saludo desde el props'}/>
      
      {/* <Inicio/>
      <Lentes/>
      <Contactos/> */}
      </>
  );
}

export default App;

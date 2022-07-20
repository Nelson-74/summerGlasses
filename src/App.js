import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import  {MyProvider } from './components/context/CartContext';
import Contactos from './components/Contactos'



function App() {
  
  return (
      <>
      

      <BrowserRouter>
      <MyProvider>
      <NavBar/>
      
      <Routes>
        {/* mostar todos los productos */}
        <Route path='/' element={<ItemListContainer/>}/>
        {/* mostar los productos de una categoría proporcionada */}
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        {/* mostar un producto según su id proporcionado */}
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        {/* mostrar el carrito */}
        <Route path='/cart' element={<Cart/>}/>

        <Route path="/CheckOut" element={<CheckOut/>} />
        <Route path='/Contactos' element={<Contactos/>}/>

      </Routes>
      </MyProvider>

      </BrowserRouter>
      
      </> 
  );
}

 export default App

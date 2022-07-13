import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import MyProvider from './components/context/CartContext';
import CheckOut from './components/CheckOut';

function App() {
  
  return (
      <>
      <MyProvider>
      <BrowserRouter>
      <NavBar/>
      
      <Routes>
        {/* mostar todos los productos */}
        <Route path='/' element={<ItemListContainer/>}/>
        {/* mostar los productos de una categoría proporcionada */}
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        {/* mostar un producto según su id proporcionado */}
        <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
        {/* mostrar el carrito */}
        <Route path='/cart' element={<Cart/>}/>

        <Route path="/CheckOut" element={<CheckOut/>} />
      </Routes>
      </BrowserRouter>
      </MyProvider>
      </> 
  );
}

 export default App

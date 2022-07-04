import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import ItemCount from './components/ItemCount';
import MyProvider from './components/CartContext';

function App() {
  
  return (
      <>
      <MyProvider>
      <BrowserRouter>
      <NavBar/>
      <ItemCount/>
      <Routes>
        {/* mostar todos los productos */}
        <Route path='/' element={<ItemListContainer/>}/>
        {/* mostar los productos de una categoría proporcionada */}
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        {/* mostar un producto según su id proporcionado */}
        <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      </MyProvider>
      </> 
  );
}

 export default App

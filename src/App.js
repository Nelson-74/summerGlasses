import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import ItemCount from './components/ItemCount';

// import MyProvider from './components/CartContext';

function App() {
  
  return (
      <>
      <BrowserRouter>
      {/* <MyProvider> */}
      <NavBar/>
      <ItemCount/>
      <Routes>
        {/* mostar todos los productos */}
        <Route path='/' element={<ItemListContainer/>}></Route>
        {/* mostar los productos de una categoría proporcionada */}
        <Route path='/category/:id' element={<ItemListContainer/>}></Route>
        {/* mostar un producto según su id proporcionado */}
        <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      {/* </MyProvider> */}
      </BrowserRouter>
      </> 
  );
}

 export default App

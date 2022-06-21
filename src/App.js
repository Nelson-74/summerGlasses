import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartWidget from './components/CartWidget';
import MyProvider from './components/CartContext';

function App() {
  
  return (
      <>
      <BrowserRouter>
      <MyProvider>
      <NavBar/>
      <Routes>
        {/* mostar todos los productos */}
        <Route path='/' element={<ItemListContainer greeting ={'Bienvenido a Summers Glasses'}/>}/>
        <Route path='/home' element={<ItemListContainer/>}/>
        {/* mostar los productos de una categoría proporcionada */}
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        {/* mostar un producto según su id proporcionado */}
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cartwitget' element={<CartWidget/>}/>
        <Route path='/*' element={<ItemListContainer/>}/>
      </Routes>
      </MyProvider>
      </BrowserRouter>
      </> 
  );
}

 export default App

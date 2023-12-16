
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { DetailContainer } from './components/DetailContainer';
import { Cart } from './components/Cart';
import { NavBar } from './components/NavBar';
import { ListContainer } from "./components/ListContainer";
import { Error404 } from './components/Error404';
import { CartProvider } from './contexts/CartContext';

import "./App.css"

function App () {
  return( <CartProvider>
  <BrowserRouter>
   <NavBar/>
   <Routes>
    
    <Route path="/" element={<ListContainer greeting=" Hello Everyone! Welcome!! ❤️ Travel Experience ✈️🚢😎"/>}/>

    <Route path="/category/:id" element={<ListContainer greeting="Welcome! ❤️ Categories!!!! ✈️🚢😎"/>}/>

    <Route path="/Cart" element={ <Cart/> }/>

    <Route path="/items/:id"
    element={ <DetailContainer greeting="Welcome! ❤️ Categories!!!! ✈️🚢😎"/>}/>

    <Route path='*' element={<Error404/>}/>

   </Routes>
  </BrowserRouter>
  </CartProvider>
  );
}

export default App;
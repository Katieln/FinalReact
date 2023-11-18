
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { ListContainer } from "./components/ListContainer";
import { Error404 } from './components/Error404';
import { DetailContainer } from './components/DetailContainer';

import "./App.css"


function App () {
  return(
  <BrowserRouter>
   <NavBar/>
   <Routes>
    
    <Route path="/" element={<ListContainer greeting="Hello Moon! ❤️ LUNA 🧟‍♀️😎🕸️"/>}/>

    <Route path="/category/:id" element={<ListContainer greeting="Hello Moon! ❤️ Categorias!!!! 🧟‍♀️😎🕸️"/>}/>

    <Route path="/items/:id" element={<DetailContainer/>}/>

    <Route path='*' element={<Error404/>}/>

   </Routes>
  </BrowserRouter>);
}

export default App;
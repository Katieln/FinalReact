
import { ListContainer } from "./components/ListContainer";

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar";

import "./App.css"

function App () {
  return(
  <>
<NavBar/>

  <ListContainer greeting="Hello Moon! ❤️"/>
  </>);
}

export default App;
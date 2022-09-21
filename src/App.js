import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contact from './components/Contact/Contact';
import About from "./components/About/About"
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='home' element={<ItemListContainer/>}/>
            <Route path="/category/about" element={<About/>}/>
            <Route path="/category/contact" element={<Contact/>}/>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

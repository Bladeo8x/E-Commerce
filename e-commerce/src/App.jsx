// import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemContainerList from './Components/ItemContainerList/ItemContainerList';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ItemCount from './Components/ItemCount/ItemCount';

  function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemContainerList greeting={"Welcome"}/>}/>
        {/* Comento el contador inicial, que tenia para la entrega 1 */}
        {/* <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log ('Cantidad agregada', quantity)} /> */}
        <Route path="/category/:categoryId" element={<ItemContainerList greeting={"Welcome"}/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;

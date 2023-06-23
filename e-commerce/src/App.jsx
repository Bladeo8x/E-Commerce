import NavBar from './Components/NavBar/NavBar';
import ItemContainerList from './Components/ItemContainerList/ItemContainerList';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

  function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<ItemContainerList greeting={"Welcome"}/>}/>
        <Route path="/category/:categoryId" element={<ItemContainerList/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;

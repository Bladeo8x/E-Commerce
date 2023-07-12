import NavBar from './Components/NavBar/NavBar';
import ItemContainerList from './Components/ItemContainerList/ItemContainerList';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Cart from './Components/Cart/Cart';
// import {NotificationProvider} from './Notification';


  function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <CartProvider>
        {/* <NotificationProvider> */}
        <NavBar />
        <Routes>
        <Route path="/" element={<ItemContainerList greeting={"Welcome"}/>}/>
        <Route path="/category/:categoryId" element={<ItemContainerList/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        {/* </NotificationProvider> */}
        </CartProvider>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;

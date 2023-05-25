// import './App.css'
import NavBar from './Components/NavBar/NavBar';
import ItemContainerList from './Components/ItemContainerList/ItemContainerList';

  function App() {
    return (
      <div className="App">
        <NavBar />
        <ItemContainerList greeting={"Welcome"} />
      </div>
    );
  }
  
  export default App;
